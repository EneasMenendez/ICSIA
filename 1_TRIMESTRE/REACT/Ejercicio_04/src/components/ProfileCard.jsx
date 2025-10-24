import React from "react";
import { Card, Badge, ListGroup } from "react-bootstrap";
import { Mail, MapPin, Heart, User } from "lucide-react";

export default function ProfileCard({ usuario }) {
  if (!usuario) return null;

  const { nombre, email, avatarUrl, direccion, aficiones } = usuario;

  return (
    <Card className="shadow-sm h-100">
      <Card.Body className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
        <img
          src={avatarUrl}
          alt={nombre}
          className="rounded-circle mb-3 mb-md-0 me-md-4"
          width={120}
          height={120}
        />
        <div className="text-center text-md-start">
          <Card.Title className="fw-bold d-flex align-items-center gap-2">
            <User size={22} /> {nombre}
          </Card.Title>
          <Card.Subtitle className="text-muted mb-3">{email}</Card.Subtitle>

          <div className="d-flex align-items-center text-muted mb-2">
            <MapPin size={18} className="me-2" />
            <span>
              {direccion.calle}, {direccion.ciudad}
            </span>
          </div>

          <div>
            <h6 className="fw-semibold mt-3 d-flex align-items-center gap-1">
              <Heart size={16} /> Aficiones:
            </h6>
            <ListGroup horizontal className="flex-wrap">
              {aficiones.map((a, i) => (
                <ListGroup.Item
                  key={i}
                  className="py-1 px-2 border-0 bg-light rounded-2 me-2 mb-2"
                >
                  <Badge bg="primary" text="light">
                    {a}
                  </Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
