import React from "react";
import { ListGroup } from "react-bootstrap";

function UserList({ usuarios = [], onSeleccionarUsuario, usuarioActivoId }) {
  return (
    <ListGroup>
      {usuarios.map((usuario) => (
        <ListGroup.Item
          key={usuario.id}
          action
          active={usuario.id === usuarioActivoId}
          onClick={() => onSeleccionarUsuario(usuario.id)}
        >
          {usuario.nombre}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UserList;
