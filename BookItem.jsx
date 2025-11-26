export default function BookItem({ book, onEdit, onDelete }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600 text-sm">Author: {book.author}</p>
        <p className="text-gray-600 text-sm">Year: {book.year}</p>
        <p className="text-gray-600 text-sm">Category: {book.category}</p>
        <p className="text-gray-600 text-sm">Stock: {book.stock}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit?.(book)}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete?.(book.id)}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
