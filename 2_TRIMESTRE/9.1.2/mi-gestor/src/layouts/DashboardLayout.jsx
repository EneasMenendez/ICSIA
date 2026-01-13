import { Box, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemText primary="Ver Tareas" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/new">
            <ListItemText primary="Añadir Tarea" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3, ml: '240px' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
