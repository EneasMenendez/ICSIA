import React from "react";

function CabeceraFicha({ nombre, vendedor }) {
  return (
    <div className="cabecera-ficha">
      <h3>{nombre}</h3>
      <p className="vendedor">
        Vendedor: <strong>{vendedor.nombre}</strong> ⭐ {vendedor.rating}
      </p>
    </div>
  );
}

export default CabeceraFicha;
