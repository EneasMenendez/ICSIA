import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import RootLayout from "./router/RootLayout.jsx";
import DashboardLayout from "./router/DashboardLayout.jsx";

import HomePage from "./components/HomePage.jsx";
import TaskListPage from "./components/TaskListPage.jsx";
import TaskDetailPage from "./components/TaskDetailPage.jsx";
import NewTaskPage from "./components/NewTaskPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const ProfilePage = lazy(() => import("./components/ProfilePage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <TaskListPage /> },
          { path: "new", element: <NewTaskPage /> },
          { path: "task/:taskId", element: <TaskDetailPage /> }
        ]
      },

      {
        path: "profile",
        element: (
          <Suspense fallback={<p>Cargando perfil...</p>}>
            <ProfilePage />
          </Suspense>
        )
      }
    ]
  },
  { path: "*", element: <NotFoundPage /> }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
