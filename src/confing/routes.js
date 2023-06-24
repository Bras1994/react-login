/* Este codigo se usará para las rutas cuando se solucione lo de como poner el protector.
En App.Js:

import { Routes, Route } from "react-router-dom";
import routes from "./confing/routes"
import { AuthProvider } from "./context/authContext";


export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {
          routes.map((route, index) => (
            <Route key={index} path={route.path} element={< route.element />} />
          ))
        }
      </Routes>
    </AuthProvider>
  )
}
*/

import { lazy } from "react";


const routes = [
    {
        path:'/',
        element : lazy (()=> import ('../routes/Home.jsx'))

    },
    {
        path:'/login',
        element : lazy (()=> import ('../routes/Login.jsx'))
    },
    {
        path:'/register',
        element : lazy (()=> import ('../routes/Register.jsx'))
    }
]

export default routes