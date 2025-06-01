import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import HomeEst from "./pages/Home-Est"
import HomeFunc from "./pages/Home-Func"
import Pagamento from "./pages/Pagamento"
import Pedido from "./pages/Pedido"
import Entrega from "./pages/Entrega"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/estoque",
        element: <HomeEst />
      },
      {
        path: "/funcionario",
        element: <HomeFunc />
      },
      {
        path: "/pagamento",
        element: <Pagamento />
      },
      {
        path: "/pedido",
        element: <Pedido />
      },
      {
        path: "/entrega",
        element: <Entrega />
      }
    ]
  }]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
