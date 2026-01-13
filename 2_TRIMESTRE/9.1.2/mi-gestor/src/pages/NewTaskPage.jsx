import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NewTaskPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tarea guardada:', form);
    navigate('/dashboard');
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Nueva Tarea</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          fullWidth
          margin="normal"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <TextField
          label="Descripción"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Guardar</Button>
      </form>
    </Container>
  );
}
