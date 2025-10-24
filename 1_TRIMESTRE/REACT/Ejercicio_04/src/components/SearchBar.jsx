import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "lucide-react";

export default function SearchBar({ filtro, setFiltro }) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text className="bg-white border-end-0">
        <Search size={18} color="#6c757d" />
      </InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Buscar usuario..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="border-start-0"
      />
    </InputGroup>
  );
}
