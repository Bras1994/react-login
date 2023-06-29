import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "../components/Alert";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // El signup es una función asincrona, toda peticipon hacia un back es asincrona.
  const { signup } = useAuth();
  //Navigate nos permite redirigir a otra pestaña
  const navigate = useNavigate();
  //Defino un estado para guarda el error

  const [error, setError] = useState();

  //esta función es para ACTUALIZAR el estado.
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  //esta función es para VER el estado.
  // se agrega el async y el await porque es singup es asincrono, y que mientras se  carga esa información se pueda seguir trabajando.

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      /*Así se pude modificar el error que devuelve por pantalla
      if(error.code === 'auth/invalid-email'){
              setError('Correo inválido')
      }*/
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error} />}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-6 py-8 mb-4"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourmail@company.ltd"
              onChange={handleChange}
              className="shadow appearance-none border roundedw-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              onChange={handleChange}
              className="shadow appearance-none border roundedw-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Register</button>
        </form>
        <p className="text-sm my-4 flex justify-between">Already have an Account <Link to='/login'className="font-semibold " >Login</Link></p>
      </div>
    </>
  );
}
 