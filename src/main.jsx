import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//páginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';

//configurando as rotas
const router = createBrowserRouter ([
  {
    element: <App />, //elemento principal
    children: [ //sub_elementos
      {
        path:"/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  //substitui o <app> por <routerprovider >
)
