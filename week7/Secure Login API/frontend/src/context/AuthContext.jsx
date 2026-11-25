
import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

import { authAPI } from "../services/api";

const AuthContext = createContext(null);

// Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

// Auth Provider
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check existing login data
  useEffect(() => {

    try {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("accessToken");

      if (storedUser && token) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }

    } catch (error) {
      console.error("Invalid stored user data:", error);

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      setUser(null);

    } finally {
      setLoading(false);
    }

  }, []);

  // Register
  const register = async (userData) => {

    try {

      const response = await authAPI.register(userData);

      return {
        success: true,
        data: response.data
      };

    } catch (error) {

      return {
        success: false,
        error: error.response?.data?.message || "Registration failed"
      };

    }
  };

  // Login
  const login = async (credentials) => {

    try {

      const response = await authAPI.login(credentials);

      const { accessToken, refreshToken, user } = response.data;

      if (!accessToken || !user) {
        throw new Error("Invalid login response");
      }

      localStorage.setItem("accessToken", accessToken);

      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }

      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);

      return { success: true };

    } catch (error) {

      return {
        success: false,
        error: error.response?.data?.message || error.message || "Login failed"
      };

    }
  };

  // Logout
  const logout = async () => {

    try {

      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        await authAPI.logout(refreshToken);
      }

    } catch (error) {

      console.error("Logout error:", error);

    } finally {

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      setUser(null);

    }
  };

  // Update User
  const updateUser = (updatedUser) => {

    setUser(updatedUser);

    localStorage.setItem("user", JSON.stringify(updatedUser));

  };

  // Context Values
  const value = {

    user,
    loading,

    register,
    login,
    logout,
    updateUser,

    isAuthenticated: !!user,

    isAdmin: user?.role === "admin"

  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );

};
