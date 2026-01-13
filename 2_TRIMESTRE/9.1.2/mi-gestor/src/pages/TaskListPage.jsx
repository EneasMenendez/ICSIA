import { Container, Typography, List, ListItemButton, ListItemText, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { TASKS } from '../data/tasks';

export default function TaskListPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Tareas</Typography>
      <List>
        {TASKS.map(task => (
          <ListItemButton key={task.id} component={Link} to={`/dashboard/task/${task.id}`}>
            <ListItemText primary={task.title} secondary={task.description} />
            <Chip label={task.status === 'completed' ? 'Completada' : 'Pendiente'} color={task.status === 'completed' ? 'success' : 'warning'} />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
}
