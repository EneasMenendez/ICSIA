import React from "react";
function ImagenProducto({ imagenURL, nombre }) {
  return (
    <img
      src={imagenURL || "https://www.lg.com/cac/images/monitores/md05947277/gallery/Global_20MK400A_2018_Gallery_Large_01.jpg"}
      alt={nombre || "Imagen del producto"}
      className="imagen-producto"
    />
  );
}
export default ImagenProducto;
