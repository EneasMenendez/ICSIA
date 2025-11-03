import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Tarea({ tarea, onToggle }) {
  const { id, texto, completada, prioridad } = tarea;

  const getColor = () => {
    switch (prioridad) {
      case "alta": return "danger";
      case "media": return "warning";
      case "baja": return "success";
      default: return "secondary";
    }
  };

  const estiloTarea = {
    textDecoration: completada ? "line-through" : "none",
    backgroundColor: completada ? "#f8f9fa" : "white",
    color: completada ? "#6c757d" : "#212529",
    borderLeft: `5px solid var(--bs-${getColor()})`,
    cursor: "pointer"
  };

  return (
    <ListGroup.Item
      className="py-3 mb-2 rounded shadow-sm"
      style={estiloTarea}
      onClick={() => onToggle(id)}
    >
      {texto}
    </ListGroup.Item>
  );
}
