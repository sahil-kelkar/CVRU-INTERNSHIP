# Day 6–7: Mini Project - Personal Portfolio Landing Page

**Student:** Sahil Kelkar  
**Course / Internship:** MERN Full Stack Internship Program (3 Months)  
**Institution:** AISECT Infotech / Dr. C. V. Raman University (CVRU), Khandwa (M.P.)  

---

## 📌 Project Overview
A fully responsive, modern, and clean **Personal Portfolio Landing Page** designed to showcase front-end skills learned during Week 1 (HTML5, CSS3, Flexbox, CSS Grid, and JavaScript DOM).

---

## 🛠️ Portfolio Sections Implemented

1. **Header & Navigation:**
   - Sticky navbar containing the brand logo (`Sahil.dev`), navigation links, and a Dark/Light mode switcher button.
   - Built using **CSS Flexbox** (`justify-content: space-between; align-items: center;`).

2. **About Me / Hero Section:**
   - 2-column layout showcasing a short bio, developer title, "Hire Me / Contact" and "GitHub" buttons, and circular profile photo.
   - Automatically collapses into a single column on mobile devices.

3. **Skills Section:**
   - 6 key technical skills (HTML5, CSS3, JavaScript, React, Node.js, MongoDB) presented in a responsive **CSS Grid** (`repeat(auto-fit, minmax(180px, 1fr))`).

4. **Featured Projects Section:**
   - 3 project cards summarizing earlier hands-on tasks:
     1. *React ToDo List Application*
     2. *CSS Grid Responsive Photo Gallery*
     3. *Interactive JavaScript Web Calculator*
   - Includes technology tags and subtle hover lift animations.

5. **Contact Section:**
   - Clean contact form with Name, Email, and Message inputs.
   - Triggers JavaScript validation and an **`alert()` confirmation message** upon submission.

6. **Footer:**
   - Copyright notice, quick links, and GitHub profile link.

---

## 💡 Key Features & Add-ons (Bonus Marks)

- **☀️ Light & 🌙 Dark Mode Toggle:** Seamlessly switches the whole page theme and remembers user preference using `localStorage`.
- **Smooth Scrolling:** `html { scroll-behavior: smooth; }` for seamless in-page navigation.
- **Mobile Responsive:** Fluid layout on mobile, tablet, and desktop viewports using `@media (max-width: 768px)`.

---

## 📚 Key Concepts Reinforced

| Concept | Skill Practiced |
| :--- | :--- |
| **HTML5 Semantic Tags** | `<header>`, `<main>`, `<section>`, `<footer>` |
| **CSS3 Layouts** | Flexbox for 1D navigation & hero; CSS Grid for skills and project cards |
| **Responsive Design** | `repeat(auto-fit, minmax())`, fluid percentages, `@media` queries |
| **JavaScript DOM** | Event listeners, class toggling (`dark-mode`), `localStorage`, and `alert()` confirmation |
