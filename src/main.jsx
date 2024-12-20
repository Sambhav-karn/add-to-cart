import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './Pages/Home'
import MainContext from './MainContext'
import Cart from './Pages/Cart'
import 'react-toastify/dist/ReactToastify.css';

let router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
    <MainContext>
      <RouterProvider router={router} />
    </MainContext>

)
