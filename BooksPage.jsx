import axios from "axios";
import { useEffect, useState } from "react";
import BookFormModal from "./BookFormModal";
import BookItem from "./BookItem";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [search, setSearch] = useState("");

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3000/books");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (data) => {
    if (editData) {
      await axios.put(`http://localhost:3000/books/${editData.id}`, data);
      setEditData(null);
    } else {
      await axios.post("http://localhost:3000/books", data);
    }

    setShowModal(false);
    fetchBooks();
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/books/${confirmDelete}`);
    setConfirmDelete(null);
    fetchBooks();
  };

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-5">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          ➕ Add Book
        </button>

        <input
          type="text"
          placeholder="Search books..."
          className="border px-3 py-2 rounded-lg w-72 shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {showModal && (
        <BookFormModal
          onClose={() => {
            setShowModal(false);
            setEditData(null);
          }}
          onSubmit={handleSubmit}
          initialData={editData}
        />
      )}

      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[350px] animate-fadeIn">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Delete Book?
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to permanently delete this book?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 rounded border hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded text-white bg-red-600 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {filteredBooks.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {filteredBooks.map((b) => (
            <BookItem
              key={b.id}
              book={b}
              onEdit={(data) => {
                setEditData(data);
                setShowModal(true);
              }}
              onDelete={(id) => setConfirmDelete(id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
