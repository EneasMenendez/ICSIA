import React from "react";
import { Form } from "react-bootstrap";

function SearchBar({ valorBusqueda, onBuscar }) {
  return (
    <Form className="mb-3">
      <Form.Control
        type="text"
        placeholder="Buscar usuario..."
        value={valorBusqueda}
        onChange={(e) => onBuscar(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar;
