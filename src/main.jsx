import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {ThemeProvider} from "@material-tailwind/react";

import {RouterProvider} from "react-router-dom";
import router from './Routes/Routes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
