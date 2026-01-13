import { Outlet } from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx';

export default function RootLayout() {
  // Layout que incluye la barra de navegación y un Outlet para renderizar las páginas hijas
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
