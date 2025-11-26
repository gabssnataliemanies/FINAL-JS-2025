import axios from "axios";
import { useEffect, useState } from "react";
import BookFormModal from "./BookFormModal";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/books");
      setBooks(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Add Book
      </button>

      {showModal && (
        <BookFormModal onClose={() => setShowModal(false)} onAdd={fetchBooks} />
      )}

      {books.length === 0 ? (
        <p className="mt-4 text-gray-600">No books found.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-6">
          {books.map((b) => (
            <div key={b.id} className="border p-4 rounded shadow-sm">
              <h3 className="font-bold">{b.title}</h3>
              <p className="text-gray-700">{b.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
