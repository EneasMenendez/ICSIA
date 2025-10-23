import React, { useState } from "react";
import usuarios from "./datos/Usuarios";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import ProfileCard from "./components/ProfileCard";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const usuarioSeleccionado = usuarios.find(
    (u) => u.id === usuarioSeleccionadoId
  );

  return (
    <Container className="mt-4">
      <h3 className="text-center mb-4">Gestor de Perfiles de Usuario</h3>
      <Row>
        {/* Lista de Usuarios */}
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Lista de Usuarios</Card.Title>
              <SearchBar valorBusqueda={busqueda} onBuscar={setBusqueda} />
              <UserList
                usuarios={usuariosFiltrados}
                onSeleccionarUsuario={setUsuarioSeleccionadoId}
                usuarioActivoId={usuarioSeleccionadoId}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Perfil seleccionado */}
        <Col md={8}>
          {usuarioSeleccionado ? (
            <ProfileCard usuario={usuarioSeleccionado} />
          ) : (
            <Card className="shadow-sm">
              <Card.Body>
                <p className="text-muted text-center">
                  Selecciona un usuario para ver los detalles
                </p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
