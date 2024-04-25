import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './HomePage.jsx'
import App1 from './SignUp.jsx'
import App2 from './Login.jsx'
import App3 from './Dashboard.jsx'
import App4 from './exf1.jsx'
import App5 from './exf2.jsx'
import App6 from './exf3.jsx'
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
  },
  {
    path : "/dashboard",
    element : <App3/>
  },
  {
    path : "/exf1",
    element : <App4/>
  },
  {
    path : "/exf2",
    element : <App5/>
  },
  {
    path : "/exf3",
    element : <App6/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
