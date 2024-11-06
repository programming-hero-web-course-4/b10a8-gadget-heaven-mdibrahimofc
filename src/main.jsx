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
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom';
import ErrorPage2 from './Components/ErrorPage2/ErrorPage2.jsx';
import ErrorPage3 from './Components/ErrorPage3/ErrorPage3.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage3></ErrorPage3>,
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
        element: <ErrorPage2></ErrorPage2>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/data.json')
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
