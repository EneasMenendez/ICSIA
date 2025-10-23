import React from "react";
import { Card, Badge } from "react-bootstrap";

function ProfileCard({ usuario }) {
  if (!usuario) return null;

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <img
            src={usuario.avatarUrl}
            alt={usuario.nombre}
            className="rounded-circle me-3"
            width="80"
            height="80"
          />
          <div>
            <Card.Title>{usuario.nombre}</Card.Title>
            <Card.Subtitle className="text-muted">
              {usuario.email}
            </Card.Subtitle>
          </div>
        </div>

        <hr />

        <Card.Text>
          <strong>Información de Contacto</strong><br />
          <span><strong>Calle:</strong> {usuario.direccion.calle}</span><br />
          <span><strong>Ciudad:</strong> {usuario.direccion.ciudad}</span>
        </Card.Text>

        <hr />

        <Card.Text>
          <strong>Aficiones</strong><br />
          {usuario.aficiones.map((aficion, index) => (
            <Badge bg={["primary", "secondary", "success"][index % 3]} key={index} className="me-2">
              {aficion}
            </Badge>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
