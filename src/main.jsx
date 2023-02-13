import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ProductosProvider } from './context/ProductosProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductosProvider>
      <RouterProvider router={router} />
    </ProductosProvider>
  </React.StrictMode>,
)
