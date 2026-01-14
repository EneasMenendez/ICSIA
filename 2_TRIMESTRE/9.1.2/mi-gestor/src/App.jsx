import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskDetailPage from './pages/TaskDetailPage';
import NewTaskPage from './pages/NewTaskPage';
import NotFoundPage from './pages/NotFoundPage';

const ProfilePage = lazy(() => import('./pages/ProfilePage'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<TaskListPage />} />
            <Route path="new" element={<NewTaskPage />} />
            <Route path="task/:taskId" element={<TaskDetailPage />} />
          </Route>

          <Route
            path="profile"
            element={
              <Suspense fallback={<div>Cargando perfil...</div>}>
                <ProfilePage />
              </Suspense>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
