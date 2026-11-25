import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { userAPI } from "../services/api";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    profilePic: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await userAPI.getProfile();
      const userProfile = response.data.profile;
      setProfile(userProfile);
      setFormData({
        name: userProfile.name,
        password: "",
        profilePic: userProfile.profilePic || "",
      });
      setImagePreview(userProfile.profilePic || "");
      setLoading(false);
    } catch (err) {
      setError("Failed to load profile");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Handle local image file upload & convert to base64 Data URL
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (PNG, JPG, JPEG, GIF, WEBP)");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB");
      return;
    }

    setError("");
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      setImagePreview(result);
      setFormData((prev) => ({ ...prev, profilePic: result }));
      setSuccess("Photo selected! Click 'Save Changes' to apply.");
    };
    reader.readAsDataURL(file);
  };

  // Remove photo
  const handleRemovePhoto = () => {
    setImagePreview("");
    setFormData((prev) => ({ ...prev, profilePic: "" }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setUpdating(true);

    try {
      const updates = {
        name: formData.name,
        profilePic: formData.profilePic,
      };

      if (formData.password) {
        updates.password = formData.password;
      }

      const response = await userAPI.updateProfile(updates);
      const updatedProfile = response.data.profile;

      setProfile(updatedProfile);
      updateUser(updatedProfile);
      setImagePreview(updatedProfile.profilePic || "");
      setSuccess("Profile and photo updated successfully!");
      setIsEditing(false);
      setFormData({
        name: updatedProfile.name,
        password: "",
        profilePic: updatedProfile.profilePic || "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const currentAvatar = isEditing ? imagePreview : profile?.profilePic;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
          
          {/* Top Banner */}
          <div className="h-32 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 relative"></div>

          <div className="px-6 pb-8 pt-0 relative">
            
            {/* Profile Avatar Container */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-16 mb-6 gap-4">
              <div className="relative group">
                {currentAvatar ? (
                  <img
                    src={currentAvatar}
                    alt={profile?.name || "Profile"}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-indigo-500/20 bg-white"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl bg-gradient-to-tr from-indigo-600 to-purple-500 text-white font-bold text-4xl flex items-center justify-center">
                    {profile?.name ? profile.name[0].toUpperCase() : "U"}
                  </div>
                )}

                {/* Edit Photo Overlay Badge in Edit Mode */}
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-1 right-1 p-2.5 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                    title="Upload Local Photo"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Action Button: Edit or Cancel */}
              <div>
                {!isEditing ? (
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setImagePreview(profile?.profilePic || "");
                    }}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit Profile
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        name: profile?.name,
                        password: "",
                        profilePic: profile?.profilePic || "",
                      });
                      setImagePreview(profile?.profilePic || "");
                      setError("");
                      setSuccess("");
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* Alerts */}
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-md text-sm">
                {success}
              </div>
            )}

            {/* Hidden Local File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {/* VIEW MODE */}
            {!isEditing ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{profile?.name}</h3>
                  <p className="text-gray-500 text-sm">{profile?.email}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Account Role
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        profile?.role === "admin"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {profile?.role?.toUpperCase()}
                    </span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Member Since
                    </span>
                    <p className="text-sm font-medium text-gray-800">
                      {new Date(profile?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* EDIT MODE */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Photo Upload Controls */}
                <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Profile Photo
                  </label>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3.5 py-2 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
                    >
                      📁 Upload Local Photo
                    </button>
                    {imagePreview && (
                      <button
                        type="button"
                        onClick={handleRemovePhoto}
                        className="px-3.5 py-2 bg-red-50 text-red-600 border border-red-200 text-xs font-medium rounded-lg hover:bg-red-100 transition"
                      >
                        🗑️ Remove Photo
                      </button>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Supports PNG, JPG, JPEG, GIF or WEBP from your computer (Max: 5MB).
                  </p>
                </div>

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3.5 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    New Password (optional)
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Leave blank to keep current password"
                    className="mt-1 block w-full px-3.5 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        name: profile?.name,
                        password: "",
                        profilePic: profile?.profilePic || "",
                      });
                      setImagePreview(profile?.profilePic || "");
                      setError("");
                      setSuccess("");
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={updating}
                    className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 transition shadow-sm"
                  >
                    {updating ? "Saving Changes..." : "Save Changes"}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
