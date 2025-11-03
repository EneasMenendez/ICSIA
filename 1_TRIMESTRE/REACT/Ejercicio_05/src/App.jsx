import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { tareasIniciales } from "./datos/Tareas";
import Filtros from "./components/Filtros";
import ListaTareas from "./components/ListaTareas";
import ResumenTareas from "./components/ResumenTareas";

export default function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState("todas");

  const toggleCompletada = (id) => {
    setTareas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const tareasFiltradas =
    filtro === "todas"
      ? tareas
      : tareas.filter((t) => t.prioridad === filtro);

  return (
    <div className="container-fluid">
      <div className="bg-primary text-white p-3 rounded mb-4">
        <h2 className="m-0">Dashboard de Tareas</h2>
      </div>

      <Filtros filtroActual={filtro} onCambiarFiltro={setFiltro} />
      <ListaTareas tareas={tareasFiltradas} onToggle={toggleCompletada} />
      <ResumenTareas
        tareasVisibles={tareasFiltradas}
        totalTareas={tareas.length}
      />
    </div>
  );
}
