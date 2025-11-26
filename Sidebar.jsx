import React from "react";

export default function Sidebar({ view, setView }) {
  return (
    <aside className="w-64 min-h-screen p-6 border-r bg-gradient-to-b from-indigo-50 via-white to-purple-50 shadow-xl">
      <h1 className="text-2xl font-bold mb-8 text-indigo-700 tracking-wide">
        📚 Library Admin
      </h1>

      <nav className="space-y-3">
        <button
          onClick={() => setView("dashboard")}
          className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-300
            ${
              view === "dashboard"
                ? "bg-indigo-600 text-white shadow-lg scale-105"
                : "hover:bg-indigo-100 text-gray-700"
            }`}
        >
          📊 Dashboard Overview
        </button>

        <button
          onClick={() => setView("books")}
          className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-300
            ${
              view === "books"
                ? "bg-purple-600 text-white shadow-lg scale-105"
                : "hover:bg-purple-100 text-gray-700"
            }`}
        >
          📘 Manage Books
        </button>
      </nav>

      <div className="mt-10 p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all">
        <p className="text-sm text-gray-600 leading-relaxed">
          ✨ Welcome Admin! Manage books, track data, and keep the library
          organized.
        </p>
      </div>
    </aside>
  );
}
