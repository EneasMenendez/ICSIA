import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { usuarios } from "./datos/Usuarios";
import UserList from "./components/UserList";
import ProfileCard from "./components/ProfileCard";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);
  const [filtro, setFiltro] = useState("");

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const usuarioSeleccionado = usuarios.find(
    (u) => u.id === usuarioSeleccionadoId
  );

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Encabezado */}
      <Card className="rounded-0 border-0 shadow-sm">
        <Card.Header className="bg-dark text-white fs-5 fw-semibold py-3">
          Gestor de Perfiles de Usuario
        </Card.Header>
      </Card>

      {/* Contenido principal */}
      <Container fluid className="py-4 flex-grow-1 d-flex justify-content-center">
        <Row className="w-100 g-4" style={{ maxWidth: "1400px" }}>
          {/* Lista de usuarios */}
          <Col xs={12} md={4} lg={20}>
            <Card className="shadow-sm h-100 card-ajustada">
              <Card.Header className="fw-semibold">Lista de Usuarios</Card.Header>
              <Card.Body className="d-flex flex-column">
                <SearchBar filtro={filtro} setFiltro={setFiltro} />
                <div className="flex-grow-1 overflow-auto">
                  <UserList
                    usuarios={usuariosFiltrados}
                    onSeleccionarUsuario={setUsuarioSeleccionadoId}
                    usuarioSeleccionadoId={usuarioSeleccionadoId}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Perfil de usuario */}
          <Col xs={10} md={8} lg={0}>
            <Card className="shadow-sm h-100 card-ajustada">
              <Card.Body className="d-flex align-items-center justify-content-center">
                {usuarioSeleccionado ? (
                  <ProfileCard usuario={usuarioSeleccionado} />
                ) : (
                  <p className="text-muted fs-5 m-0 text-center">
                    Selecciona un usuario para ver los detalles
                  </p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
