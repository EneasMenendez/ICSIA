import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import PostsListPage from './components/PostListPage.jsx'
import PostDetailPage from './components/PostDetailPage.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'posts',
          element: <PostsListPage />
        },
        {
          path: 'posts/:postId',
          element: <PostDetailPage />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
