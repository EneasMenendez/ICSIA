import React from "react";

function PieFicha({ precio, enStock }) {
  return (
    <div className="pie-ficha">
      {enStock ? (
        <>
          <p className="precio">
            {precio.moneda}
            {precio.valor.toFixed(2)}{" "}
            {precio.enOferta && <span className="oferta">¡OFERTA!</span>}
          </p>
        </>
      ) : (
        <p className="no-stock">No disponible</p>
      )}
    </div>
  );
}

export default PieFicha;
