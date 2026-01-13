import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#90caf9' : 'white',
    textDecoration: 'none',
    marginRight: '1rem',
  });

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Gestor de Tareas</Typography>
        <NavLink to="/" style={linkStyle}><Button color="inherit">Inicio</Button></NavLink>
        <NavLink to="/dashboard" style={linkStyle}><Button color="inherit">Panel</Button></NavLink>
        <NavLink to="/profile" style={linkStyle}><Button color="inherit">Perfil</Button></NavLink>
      </Toolbar>
    </AppBar>
  );
}
