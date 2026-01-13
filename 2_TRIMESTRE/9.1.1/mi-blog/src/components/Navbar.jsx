import { AppBar, Toolbar, Typography, Button } from '@mui/material'; // Importacion de componentes de MUI
import { NavLink } from 'react-router-dom'; // Importacion de NavLink para la navegacion

//Este componente representa la barra de navegacion de la aplicacion, en este caso utilizando
//componentes de Material-UI (MUI) para el diseño y estilo.

export default function Navbar() {
    // Función para definir el estilo del enlace activo
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#90caf9' : 'white',
    textDecoration: 'none',
    marginRight: '1rem',
  });

  return (
    // NavBar de MUI
    <AppBar position="static"> 
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Eneas Menendez - Mi Blog
        </Typography>
        <NavLink to="/" style={linkStyle}>
        {/* Enlace a la pagina de inicio con to="/" */}
          <Button color="inherit">Inicio</Button>
        </NavLink>
        <NavLink to="/posts" style={linkStyle}>
        {/* Enlace a la pagina de nuestros articulos con to="/posts" */}
          <Button color="inherit">Artículos</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
