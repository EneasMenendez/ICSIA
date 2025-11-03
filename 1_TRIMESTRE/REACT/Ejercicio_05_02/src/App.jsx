import React, { useState } from "react";
import { allArticles } from "./datos/articles";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import EmptyState from "./components/EmptyState.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Todas");
  const [articles, setArticles] = useState(allArticles);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "Todas" || article.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handlePin = (id) => {
    setArticles((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, pinned: true } : { ...a, pinned: false }
      )
    );
  };

  return (
    <div
      className="container-fluid"
    >
      <h1 className="display-5 text-center fw-bold text-dark mb-4">
        <span className="fst-italic">Feed de Noticias Clásico</span>
      </h1>
      <p className="text-center text-muted fst-italic mb-5">
        Una mirada sobria a la actualidad tecnológica
      </p>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="d-flex justify-content-center gap-2 my-4">
        {["Todas", "React", "CSS", "JavaScript"].map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${categoryFilter === cat ? "btn-dark" : "btn-outline-secondary"
              }`}
            style={{ borderRadius: "0" }}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <hr className="border-dark opacity-50" />

      {filteredArticles.length > 0 ? (
        <ArticleList articles={filteredArticles} onPin={handlePin} />
      ) : (
        <EmptyState mensaje="No se encontraron artículos con los filtros seleccionados." />
      )}
    </div>
  );
}

export default App;
