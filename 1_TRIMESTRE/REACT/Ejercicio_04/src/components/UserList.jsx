import React from "react";
import { ListGroup, Image } from "react-bootstrap";

export default function UserList({
  usuarios,
  onSeleccionarUsuario,
  usuarioSeleccionadoId,
}) {
  if (!usuarios || usuarios.length === 0) {
    return <p className="text-muted text-center mt-3">No se encontraron usuarios</p>;
  }

  return (
    <ListGroup variant="flush">
      {usuarios.map((u) => (
        <ListGroup.Item
          key={u.id}
          action
          onClick={() => onSeleccionarUsuario(u.id)}
          active={u.id === usuarioSeleccionadoId}
          className="d-flex align-items-center gap-3 py-2"
        >
          <Image
            src={u.avatarUrl}
            roundedCircle
            width={40}
            height={40}
            alt={u.nombre}
          />
          <div className="flex-grow-1">
            <span className="fw-semibold">{u.nombre}</span>
            <div className="small text-muted">{u.email}</div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
