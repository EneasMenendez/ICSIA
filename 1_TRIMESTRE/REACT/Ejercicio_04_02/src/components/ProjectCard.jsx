import React from "react";
import { Card, Form, Badge } from "react-bootstrap";
import TeamMemberList from "./TeamMemberList";

export default function ProjectCard({ proyecto, onActualizarEstado }) {
  const { id, titulo, descripcion, estado, responsables, prioridad } = proyecto;

  const getColorPrioridad = (nivel) => {
    switch (nivel) {
      case "Alta": return "danger";
      case "Media": return "warning";
      case "Baja": return "success";
      default: return "secondary";
    }
  };

  return (
    <Card className="mb-3 shadow-sm border-0">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="fs-6 m-0">{titulo}</Card.Title>
          <Badge bg={getColorPrioridad(prioridad)}>{prioridad}</Badge>
        </div>
        <Card.Text className="text-muted small">{descripcion}</Card.Text>

        <TeamMemberList responsables={responsables} />

        <Form.Select
          value={estado}
          onChange={(e) => onActualizarEstado(id, e.target.value)}
          className="mt-3"
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En Progreso">En Progreso</option>
          <option value="Completado">Completado</option>
        </Form.Select>
      </Card.Body>
    </Card>
  );
}
