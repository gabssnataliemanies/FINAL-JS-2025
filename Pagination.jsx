import React from "react";

export default function Pagination({ page, perPage, total, setPage }) {
  const pages = Math.max(1, Math.ceil(total / perPage));
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="px-3 py-1 border rounded"
      >
        Prev
      </button>
      <div className="text-sm">
        Page {page} / {pages}
      </div>
      <button
        onClick={() => setPage((p) => Math.min(pages, p + 1))}
        className="px-3 py-1 border rounded"
      >
        Next
      </button>
    </div>
  );
}
