import React from "react";
import { ListGroup } from "react-bootstrap";

export default function TeamMemberList({ responsables }) {
  return (
    <ListGroup variant="flush" className="small">
      {responsables.map((r) => (
        <ListGroup.Item key={r.id} className="py-1 px-2 border-0">
          👤 {r.nombre}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
