import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/error',
        element: <ErrorPage></ErrorPage>
      },
      {
        path: '/details/:productsId',
        element: <ProductsDetails></ProductsDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/statistics',
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
