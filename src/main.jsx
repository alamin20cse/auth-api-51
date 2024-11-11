import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Root1 from './Component/Root1/Root1.jsx';
import Login from './Component/Login/Login.jsx';
import Regiester from './Component/Regiester/Regiester.jsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx';
import Order from './Component/Order/Order.jsx';
import PrivateRoute from './Route/PrivateRoute/PrivateRoute.jsx';
import Profile from './Component/Profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root1></Root1>,
    children:[

      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/regiester',
        element:<Regiester></Regiester>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </StrictMode>,
)
