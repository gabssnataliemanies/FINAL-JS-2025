import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const resultRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalBooks = books.length;
  const categories = [...new Set(books.map((b) => b.category))].length;
  const outOfStock = books.filter((b) => Number(b.stock) === 0).length;

  const recentBooks = [...books].reverse().slice(0, 10);

  const filtered = recentBooks.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (search.trim() !== "" && filtered.length > 0) {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [search]);

  return (
    <div className="p-10 bg-gradient-to-br from-gray-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 tracking-wide drop-shadow-sm">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-7 mb-14">
        <div className="p-7 rounded-3xl backdrop-blur-xl bg-white/60 shadow-2xl border border-indigo-300 hover:scale-105 transition transform duration-300">
          <p className="text-lg text-gray-700 font-medium opacity-90">
            Total Books
          </p>
          <p className="text-6xl font-extrabold mt-3 text-indigo-700 drop-shadow">
            {totalBooks}
          </p>
          <span className="text-4xl"></span>
        </div>

        <div className="p-7 rounded-3xl backdrop-blur-xl bg-white/60 shadow-2xl border border-purple-300 hover:scale-105 transition transform duration-300">
          <p className="text-lg text-gray-700 font-medium opacity-90">
            Categories
          </p>
          <p className="text-6xl font-extrabold mt-3 text-purple-700 drop-shadow">
            {categories}
          </p>
          <span className="text-4xl"></span>
        </div>

        <div className="p-7 rounded-3xl backdrop-blur-xl bg-white/60 shadow-2xl border border-rose-300 hover:scale-105 transition transform duration-300">
          <p className="text-lg text-gray-700 font-medium opacity-90">
            Out of Stock
          </p>
          <p className="text-6xl font-extrabold mt-3 text-rose-700 drop-shadow">
            {outOfStock}
          </p>
          <span className="text-4xl"></span>
        </div>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search recent book..."
          className="border px-5 py-3 rounded-2xl w-96 shadow-lg bg-white/80 backdrop-blur focus:ring-2 focus:ring-indigo-400 outline-none transition text-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="text-3xl font-bold mb-6 text-gray-900 tracking-tight">
        Recently Added
      </h2>

      {recentBooks.length === 0 && (
        <p className="text-gray-500 text-lg">No books yet.</p>
      )}

      <div className="space-y-5 max-h-96 overflow-y-auto pr-2">
        {(search ? filtered : recentBooks).map((b) => {
          const isMatch =
            search && b.title.toLowerCase().includes(search.toLowerCase());

          return (
            <div
              key={b.id}
              ref={isMatch ? resultRef : null}
              className={`p-6 rounded-3xl flex justify-between items-center transition-all duration-300 shadow-xl border backdrop-blur-lg
              ${
                isMatch
                  ? "bg-yellow-100/80 border-yellow-500 scale-[1.03]"
                  : "bg-white/70 hover:bg-white/90 border-gray-200 hover:scale-[1.02]"
              }`}
            >
              <div>
                <p className="font-bold text-2xl text-gray-900">{b.title}</p>
                <p className="text-sm text-gray-700 mt-1">✍️ {b.author}</p>
                <p className="text-sm text-gray-700">📅 {b.year}</p>

                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-indigo-200 text-indigo-700 text-xs rounded-full font-medium">
                    {b.category}
                  </span>

                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                      ${
                        Number(b.stock) === 0
                          ? "bg-rose-200 text-rose-700"
                          : "bg-emerald-200 text-emerald-700"
                      }`}
                  >
                    Stock: {b.stock}
                  </span>
                </div>
              </div>

              <div className="text-5xl"></div>
            </div>
          );
        })}

        {search !== "" && filtered.length === 0 && (
          <p className="text-gray-500 italic text-lg">
            No matching books found.
          </p>
        )}
      </div>
    </div>
  );
}
