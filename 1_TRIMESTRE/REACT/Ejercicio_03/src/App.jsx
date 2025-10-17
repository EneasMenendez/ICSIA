import React from "react";
import productos from "./datos/Productos";
import GaleriaProductos from "./components/GaleriaProductos";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="titulo">Catálogo de Productos</h1>
      <GaleriaProductos productos={productos} />
    </div>
  );
}

export default App;
