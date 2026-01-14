import { useState } from 'react';
import { Box, List, ListItemButton, ListItemText, Paper } from '@mui/material';
import { Outlet, Link, useOutletContext } from 'react-router-dom';
import { TASKS } from '../data/tasks';

export default function DashboardLayout() {
  const [tasks, setTasks] = useState(TASKS);

  const addTask = (task) => {
    const newTask = { id: Date.now(), status: 'pending', ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <Box sx={{ display: 'flex', mt: 2 }}>
      <Paper
        elevation={3}
        sx={{
          width: 240,
          bgcolor: '#e3f2fd',
          p: 2,
          height: 'calc(100vh - 64px)', // debajo del Navbar
        }}
      >
        <List>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemText primary="Ver Tareas" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/new">
            <ListItemText primary="Añadir Tarea" />
          </ListItemButton>
        </List>
      </Paper>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Pasamos tareas y funciones como contexto a las rutas hijas */}
        <Outlet context={{ tasks, addTask, deleteTask }} />
      </Box>
    </Box>
  );
}

// Hook para acceder al contexto de las rutas hijas
export function useDashboard() {
  return useOutletContext();
}
