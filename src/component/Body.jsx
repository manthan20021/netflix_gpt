import React from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browes from './Browes'
import App from '../App'

const Body = () => {
    const appRouter = createBrowserRouter([
       {
        path:"/",
        element: <Login/>
       },
       {
        path:"/browes",
        element: <Browes/>
       },
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
