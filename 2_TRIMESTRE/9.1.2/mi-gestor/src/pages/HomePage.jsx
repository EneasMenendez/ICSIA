import { Container, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Bienvenido al Gestor de Tareas</Typography>
      <Typography>Administra tus tareas de forma eficiente usando React Router y Material UI.</Typography>
    </Container>
  );
}
