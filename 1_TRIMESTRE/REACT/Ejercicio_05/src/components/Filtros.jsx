import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export default function Filtros({ filtroActual, onCambiarFiltro }) {
  const filtros = ["todas", "alta", "media", "baja"];

  return (
    <div className="mb-4 text-center">
      <ButtonGroup>
        {filtros.map((nivel) => (
          <Button
            key={nivel}
            variant={filtroActual === nivel ? "primary" : "outline-primary"}
            onClick={() => onCambiarFiltro(nivel)}
          >
            {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
