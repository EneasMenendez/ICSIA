import { Container, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useDashboard } from '../layouts/DashboardLayout';

export default function TaskDetailPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask } = useDashboard();

  const task = tasks.find((t) => t.id === Number(taskId));

  if (!task) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">Tarea no encontrada</Typography>
      </Container>
    );
  }

  const handleDelete = () => {
    deleteTask(task.id);
    navigate('/dashboard', { replace: true });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{task.title}</Typography>
      <Typography sx={{ mb: 2 }}>{task.description}</Typography>
      <Typography variant="subtitle1">Estado: {task.status}</Typography>
      <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={handleDelete}>
        Borrar
      </Button>
    </Container>
  );
}
