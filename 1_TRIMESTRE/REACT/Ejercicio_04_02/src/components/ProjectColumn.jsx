import React from "react";
import { Card } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export default function ProjectColumn({ titulo, proyectos, onActualizarEstado }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Header className="bg-dark text-white fw-semibold text-center">
        {titulo}
      </Card.Header>
      <Card.Body className="bg-light">
        {proyectos.length > 0 ? (
          proyectos.map(proyecto => (
            <ProjectCard
              key={proyecto.id}
              proyecto={proyecto}
              onActualizarEstado={onActualizarEstado}
            />
          ))
        ) : (
          <p className="text-muted text-center my-3">Sin proyectos</p>
        )}
      </Card.Body>
    </Card>
  );
}
