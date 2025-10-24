import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectColumn from "./ProjectColumn";
import { proyectos as proyectosIniciales } from "../datos/Proyectos";

export default function Dashboard() {
  const [proyectos, setProyectos] = useState(proyectosIniciales);

  const handleActualizarEstado = (id, nuevoEstado) => {
    setProyectos(prev =>
      prev.map(p => (p.id === id ? { ...p, estado: nuevoEstado } : p))
    );
  };

  const columnas = ["Pendiente", "En Progreso", "Completado"];

  return (
    <Container fluid className="py-4">
      {/* Encabezado azul con texto alineado a la izquierda */}
      <div className="bg-primary text-white py-3 px-4 mb-4 rounded shadow-sm">
        <h2 className="fw-semibold m-0">Dashboard de Proyectos</h2>
      </div>

      <Row className="g-4">
        {columnas.map(estado => (
          <Col key={estado} xs={12} md={4}>
            <ProjectColumn
              titulo={estado}
              proyectos={proyectos.filter(p => p.estado === estado)}
              onActualizarEstado={handleActualizarEstado}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
