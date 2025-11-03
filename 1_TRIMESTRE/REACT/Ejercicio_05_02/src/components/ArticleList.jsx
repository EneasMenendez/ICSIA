import React from "react";
import Article from "./Article";

export default function ArticleList({ articles, onPin }) {
  // 🔝 Mostrar primero los fijados
  const sorted = [...articles].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  return (
    <div className="row">
      {sorted.map((article) => (
        <div className="col-md-6 col-lg-4 mb-4" key={article.id}>
          <Article article={article} onPin={onPin} />
        </div>
      ))}
    </div>
  );
}
