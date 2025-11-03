import React from "react";

export default function Article({ article, onPin }) {
  const { id, title, category, pinned } = article;

  return (
    <div
      className={`card border-dark mb-3 ${
        pinned ? "bg-light" : "bg-white"
      }`}
      style={{
        borderWidth: "2px",
        borderRadius: "0",
        fontFamily: "'Georgia', serif",
      }}
    >
      <div className="card-body">
        <h5 className="card-title fw-bold">
          {title}
          {pinned && (
            <span className="badge bg-dark ms-2 fst-italic">Fijado</span>
          )}
        </h5>
        <p className="card-text text-muted mb-2">
          Categoría: <span className="text-dark">{category}</span>
        </p>
        <button
          className={`btn btn-sm ${
            pinned ? "btn-secondary" : "btn-outline-dark"
          }`}
          style={{ borderRadius: "0" }}
          onClick={() => onPin(id)}
        >
          {pinned ? "Desfijar" : "Fijar"}
        </button>
      </div>
    </div>
  );
}
