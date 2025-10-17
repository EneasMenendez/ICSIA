import React from "react";

function DetallesProducto({ caracteristicas, children }) {
  return (
    <div className="detalles-producto">
      <h5>Características:</h5>
      <ul>
        {caracteristicas.map((caracteristica, index) => (
          <li key={index}>{caracteristica}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export default DetallesProducto;
