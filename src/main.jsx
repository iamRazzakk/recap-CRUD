import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './User/User';
import GetUserData from './User/GetUserData';
const router = createBrowserRouter([
  {
    path: "/",
    element: <User></User>,
  },
  {
    path: "/users",
    element: <GetUserData></GetUserData>,
    loader: () => fetch(`http://localhost:5000/users`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
