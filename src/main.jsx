import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './HomePage.jsx'
import App1 from './SignUp.jsx'
import App2 from './Login.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/signup",
    element : <App1/>
  },
  {
    path : "/login",
    element : <App2/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
