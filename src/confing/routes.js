import { lazy } from "react";


const routes = [
    {
        path:'/',
        element : lazy (()=> import ('../routes/Home.jsx'))
    },
    {
        path:'/login',
        element : lazy (()=> import ('../routes/Login.jsx'))
    }
]

export default routes