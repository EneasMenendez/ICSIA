import React from "react";
import FichaProducto from "./FichaProducto";

function GaleriaProductos({ productos }) {
  return (
    <div className="galeria-productos">
      {productos.map((producto) => (
        <FichaProducto key={producto.id} producto={producto}>
          <button className="btn-mas-info">Más información</button>
        </FichaProducto>
      ))}
    </div>
  );
}

export default GaleriaProductos;
