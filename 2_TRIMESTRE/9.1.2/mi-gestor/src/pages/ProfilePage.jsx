import { Container, Typography } from '@mui/material';

export default function ProfilePage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Perfil de Usuario</Typography>
      <Typography>Nombre: Eneas Menendez</Typography>
      <Typography>Email: eneasdmp36@educastur.es</Typography>
    </Container>
  );
}
