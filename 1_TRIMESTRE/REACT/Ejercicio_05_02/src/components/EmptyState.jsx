import React from "react";

export default function EmptyState({ mensaje }) {
  return (
    <div
      className="alert alert-secondary text-center mt-5 fst-italic"
      style={{
        border: "1px solid #444",
        borderRadius: "0",
        backgroundColor: "#f4f1ec",
        color: "#222",
      }}
    >
      {mensaje}
    </div>
  );
}
