const mongoose = require("mongoose");
const Product = require("../models/product");

// GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET product by ID
exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        error: "Name, price and category are required"
      });
    }

    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product Added",
      product
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update product
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const product = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({
      message: "Product Updated",
      product
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({
      message: "Product Deleted",
      product
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SEARCH, FILTER, SORT AND PAGINATION
exports.filterProducts = async (req, res) => {
  try {
    const {
      name,
      category,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
      sort = "price",
      order = "asc"
    } = req.query;

    const currentPage = Number(page);
    const pageLimit = Number(limit);

    if (
      !Number.isInteger(currentPage) ||
      !Number.isInteger(pageLimit) ||
      currentPage < 1 ||
      pageLimit < 1 ||
      pageLimit > 100
    ) {
      return res.status(400).json({
        error: "Page must be positive and limit must be between 1 and 100"
      });
    }

    const filters = {};

    if (name) {
      filters.name = { $regex: name, $options: "i" };
    }

    if (category) {
      filters.category = category;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      filters.price = {};

      if (minPrice !== undefined) {
        filters.price.$gte = Number(minPrice);
      }

      if (maxPrice !== undefined) {
        filters.price.$lte = Number(maxPrice);
      }

      if (
        Object.values(filters.price).some(
          value => !Number.isFinite(value)
        )
      ) {
        return res.status(400).json({
          error: "Price values must be valid numbers"
        });
      }

      if (
        filters.price.$gte !== undefined &&
        filters.price.$lte !== undefined &&
        filters.price.$gte > filters.price.$lte
      ) {
        return res.status(400).json({
          error: "minPrice cannot be greater than maxPrice"
        });
      }
    }

    const sortFields = ["name", "price", "category", "createdAt"];

    if (!sortFields.includes(sort)) {
      return res.status(400).json({
        error: "Invalid sort field"
      });
    }

    if (!["asc", "desc"].includes(order)) {
      return res.status(400).json({
        error: "Order must be asc or desc"
      });
    }

    const skip = (currentPage - 1) * pageLimit;
    const sortOrder = order === "asc" ? 1 : -1;

    const [products, total] = await Promise.all([
      Product.find(filters)
        .sort({ [sort]: sortOrder })
        .skip(skip)
        .limit(pageLimit),

      Product.countDocuments(filters)
    ]);

    res.json({
      page: currentPage,
      limit: pageLimit,
      total,
      totalPages: Math.ceil(total / pageLimit),
      products
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};