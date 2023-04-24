import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Usuarios from './components/layouts/Usuarios'
import Home from './components/layouts/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Error 404</h1>
  },
  {
    path: '/users',
    element: <Usuarios />
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App