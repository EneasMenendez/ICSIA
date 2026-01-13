import { Container, Typography } from '@mui/material'; // Importacion de componentes de MUI

// Componente HomePage que muestra un mensaje de bienvenida en la pagina principal del Blog

export default function HomePage() {
    // Renderizado del contenedor con el mensaje de bienvenida
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Bienvenido a Mi Blog</Typography>
      <Typography>
        Explora artículos sobre React, Hooks, y desarrollo frontend moderno.
      </Typography>
    </Container>
  );
}
