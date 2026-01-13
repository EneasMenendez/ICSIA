import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PostsListPage from './pages/PostsListPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/*  Define las rutas hijas dentro de RootLayout */}
          <Route index element={<HomePage />} />
          {/* Ruta para la lista de artículos */}
          <Route path="posts" element={<PostsListPage />} />
          {/* Ruta para el detalle de un artículo específico */}
          <Route path="posts/:postId" element={<PostDetailPage />} />
          {/* Ruta para manejar URLs no definidas */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
