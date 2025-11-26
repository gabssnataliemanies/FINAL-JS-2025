import React, { useState, useEffect } from "react";

const BookFormModal = ({ onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    category: "",
    stock: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[460px] border border-gray-200">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold text-gray-800">
            {initialData ? "Edit Book" : "Add New Book"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          ></button>
        </div>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <div className="flex gap-3">
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={form.year}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {initialData ? "Save Changes" : "Add Book"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookFormModal;
