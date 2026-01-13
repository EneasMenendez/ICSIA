import { Container, Typography, Button } from '@mui/material'; //Importamos los componentes necesarios de MUI
import { useParams, Link } from 'react-router-dom'; //Importamos useParams para obtener los parametros de la URL y Link para crear enlaces
import { POSTS } from '../data/posts';

export default function PostDetailPage() {
    //Obtenemos el postId de los parametros de la URL
    const { postId } = useParams();
    const post = POSTS.find(p => p.id === Number(postId));
    //Si no se encuentra el post, mostramos un mensaje de error
    if (!post) {
        return (
            <Container sx={{ mt: 4 }}>
                {/* Mensaje de error al no encontrar el articulo */}
                <Typography variant="h5" color="error">Artículo no encontrado</Typography>
                {/* Boton para volver a la lista de articulos */}
                <Button component={Link} to="/posts" sx={{ mt: 2 }} variant="contained">
                    Volver a la lista de artículos
                </Button>
            </Container>
        );
    }

    return (
        //Mostrará el titulo y el contenido completo de un unico articulo
        <Container sx={{ mt: 4 }}>
            {/* Titulo del articulo */}
            <Typography variant="h4" gutterBottom>{post.title}</Typography>
            {/* Contenido del articulo  */}
            <Typography sx={{ mb: 3 }}>{post.content}</Typography>
            {/* Boton para volver a la lista de articulos */}
            <Button component={Link} to="/posts" variant="contained">
                Volver a la lista de artículos
            </Button>
        </Container>
    );
}
