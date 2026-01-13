import { Container, Typography } from '@mui/material';

export default function ProfilePage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Perfil de Usuario</Typography>
      <Typography>Nombre: Juan Pérez</Typography>
      <Typography>Email: juanperez@example.com</Typography>
    </Container>
  );
}
