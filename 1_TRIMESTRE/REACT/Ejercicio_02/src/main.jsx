import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './menu'
import Tarjetas from './tarjetas'
import Formularios from './formularios'
import Footer from './footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Tarjetas />
    <Formularios />
    <Footer />
  </StrictMode>,
)
