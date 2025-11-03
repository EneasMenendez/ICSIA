import React from "react";
import Tarea from "./Tarea";

export default function ListaTareas({ tareas, onToggle }) {
  return (
    <div className="list-group mb-3">
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} onToggle={onToggle} />
      ))}
    </div>
  );
}
