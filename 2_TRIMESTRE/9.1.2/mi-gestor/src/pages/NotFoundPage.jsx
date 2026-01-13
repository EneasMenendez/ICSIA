import { Container, Typography } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" color="error">404 - Página no encontrada</Typography>
      <Typography>La ruta que intentas acceder no existe.</Typography>
    </Container>
  );
}
