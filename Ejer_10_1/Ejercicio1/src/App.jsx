import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import CountryDetails from './components/CountryDetails.jsx'
import ErrorPage from './components/ErrorPage.jsx'

// En este metodo defino todas las rutas de la aplicacion
export const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <Layout />,
    errorElement: <ErrorPage />,

    // Cargo los paises
    loader: async () => {
      const respuesta = await fetch(
        'https://restcountries.com/v3.1/region/europe'
      )

      if (!respuesta.ok) {
        throw new Error('Error al cargar los países')
      }

      return respuesta.json()
    },

    children: [
      {
        path: 'country/:nombrePais',
        element: <CountryDetails />
      }
    ]
  }
])



