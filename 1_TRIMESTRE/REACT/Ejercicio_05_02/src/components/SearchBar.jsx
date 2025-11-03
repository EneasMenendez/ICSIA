import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="d-flex justify-content-center mb-4">
      <input
        type="text"
        className="form-control w-50 border-dark"
        style={{
          borderRadius: "0",
          backgroundColor: "#fdfcf9",
        }}
        placeholder="Buscar artículo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
