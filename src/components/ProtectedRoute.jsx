import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({children}){
    const {user, loading} = useAuth()

    if (loading) return <h1>Loading</h1>
    if (!user) return <Navigate to='/login' />

    return(
        <>
            {children}
        </>
    )
}

//este componentre sirva para proteger el contenido de la pagina que se mostrará cuando un user no esté logueado.