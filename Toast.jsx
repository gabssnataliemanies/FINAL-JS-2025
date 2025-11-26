import React from "react";

export default function Toast({ msg, type }) {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div
        className={`px-4 py-3 rounded shadow-lg ${
          type === "info" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {msg}
      </div>
    </div>
  );
}
