import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "../components/Alert";
import portada from "../assets/statics/portada-mini.jpg";
import logo from "../assets/statics/logo.png";

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
      <div className="w-lg h-screen relative bg-gradient-to-b from-slate-500 to-slate-200">
        <div className="w-[296px] absolute inset-y-0 right-14 flex flex-col justify-start items-center">
        <img
          className="h-[150px] left-[868px] top-[49px]"
          src={logo}
        />
        <div className="top-0 relative">
          <h3 className=" text-black text-[20px] font-sans font-medium my-2.5 ">
            Registrate
          </h3>
        </div>
          {error && <Alert message={error} />}
          <div className="w-[296px] h-[180px] relative rounded" id="register">
            <form
              onSubmit={handleSubmit}
              className="w-[296px] h-[180px] left-0 top-0 flex items-center"
            >
              <div className="w-[296px] h-[50px] top-[15px] left-0 absolute flex items-end">
                <label htmlFor="email" className="w-[139px] h-[22px] left-0 absolute text-stone-700 text-[12px] font-normal">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourmail@company.ltd"
                  onChange={handleChange}
                  className="w-[296px] h-[25px] left-0 top-[1px] absolute rounded bg-transparent border border-gray-500 text-sm shadow-sm placeholder-slate-500
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-transparent disabled:text-slate-500 disabled:border-b-gray-800 disabled:shadow-none"
                />
              </div>
              <div className="w-[296px] h-[47px] left-0 absolute flex items-end">
                <label htmlFor="password" className="w-[109px] h-[22px] left-0 absolute text-stone-700 text-[12px] font-normal">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  onChange={handleChange}
                  className="w-[296px] h-[25px] left-0 top-[1px] absolute rounded bg-transparent border border-gray-500 text-sm shadow-sm placeholder-slate-500
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-transparent disabled:text-slate-500 disabled:border-b-gray-800 disabled:shadow-none"
                />
              </div>
              <div className="w-[158px] h-[38px] left-[61px] top-[139px] absolute">
              <button className="w-[158px] h-8 left-0 top-[3px] relative bg-gradient-to-b from-purple-500 to-red-300 hover:bg-purple-400 focus:ring-violet-300  rounded-sm text-white text-sm font-bold px-4 focus:outline-none focus:shadow-outline" >Register</button>
            </div>
            </form>

            <div className=" relative mb-2 mt-3.5 "> 
            <p className="text-sm flex justify-between">Already have an Account <Link to='/login' className="font-semibold " >Login</Link></p>
          </div>
          </div>
          
        </div>
        <div className="w-[700px] h-[477px] left-[33px]  top-4 absolute">
        <img className=" min-h-[300px] object-cover object-right-center w-[700px] h-[477px] rounded" src={portada} />
      </div>
      </div>

    </>
  );
}
