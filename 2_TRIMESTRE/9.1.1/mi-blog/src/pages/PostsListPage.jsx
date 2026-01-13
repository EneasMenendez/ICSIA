//Mostrará el titulo y el contenido completo de un unico articulo
//El articulo vendrá mostrado por el post seleccionado en PostDetailPage.jsx, que tiene un link a este archivo
//Debe incluir un enlace <Link> para "volver a la lista de articulos"
import { Container, Typography, List, ListItemButton, ListItemText } from '@mui/material'; // Importa los componentes necesarios de MUI
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom
import { POSTS } from '../data/posts';

export default function PostsListPage() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Artículos</Typography>
            <List>
                {POSTS.map(post => (
                    //Usamos ListItemButton para que cada item sea clickeable
                    <ListItemButton
                        key={post.id}
                        //Usamos el componente Link para navegar a la página de detalles del post
                        component={Link}
                        //El link debe llevar al post seleccionado
                        to={`/posts/${post.id}`}
                    >
                        {/* Mostramos el titulo del post */}
                        <ListItemText primary={post.title} />
                    </ListItemButton>
                ))}
            </List>
        </Container>
    );
}
