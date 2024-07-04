
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'

import {Home, About, Login, Register, ErorPages} from './pages'
import MainLayouyt from './Layout/MainLayout'

import {action as RegisterAction} from './pages/Register'
import {action as LoginAction} from './pages/Login'

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErorPages />,
      element: <MainLayouyt />,
      children:[
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    },
    {
      path: "/login",
      errorElement: <ErorPages />,
      element: <Login />,
      action:LoginAction,
    },
    {
      path: '/Register',
      errorElement: <ErorPages />,
      element: <Register />,
      action: RegisterAction,
    }
  ])

 

  return <RouterProvider router={routes} />
}

export default App
