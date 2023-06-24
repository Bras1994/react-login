import { useAuth } from "../context/authContext"


export function loginWithGoogle() {

const {loginWithGoogle} = useAuth()

const handleGoogleSignin = async()=>{
    await loginWithGoogle()
}

  return (
    <>
        <button onClick={handleGoogleSignin}>Login with Google</button>
    </>
  )
}





/* Logica para cambia el nombre del boton sin tener que repetir código.
    
const [isRegister, setIsRegister] = useState()

const text = isRegister ? 'Login' : 'Registrate' //texto que va a salir en el boton

const buttonClassName = isRegister ? 'tw-followCard-button is-following' :'tw-followCard-button' */