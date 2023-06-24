import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"
import { Alert } from "../components/Alert";

export default function Register() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // El signup es una función asincrona, toda peticipon hacia un back es asincrona.
  const {signup} = useAuth()
 //Navigate nos permite redirigir a otra pestaña
  const navigate = useNavigate()
  //Defino un estado para guarda el error 

  const [error, setError] = useState()

  //esta función es para ACTUALIZAR el estado.
  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  //esta función es para VER el estado.
  // se agrega el async y el await porque es singup es asincrono, y que mientras se  carga esa información se pueda seguir trabajando.

  const handleSubmit =async (e)=>{
    e.preventDefault()
    setError ('')
    try{
      await signup(user.email , user.password)
      navigate ('/')
    }catch (error){
      /*Así se pude modificar el error que devuelve por pantalla
      if(error.code === 'auth/invalid-email'){
              setError('Correo inválido')
      }*/
      setError(error.message)
    }
 } 



  return (
    <>
      <div>
      {error && <Alert message={error} />}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="yourmail@company.ltd" onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="******" onChange={handleChange} />
          <button>Register</button>
        </form>
      </div>
    </>
  )
}

