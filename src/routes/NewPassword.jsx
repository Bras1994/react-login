import { useAuth } from "../context/authContext";
import portada from "../assets/statics/portada-mini.jpg";
import logo from "../assets/statics/logo.png";
import { useState } from "react";
import { Link, useLocation,useNavigate} from "react-router-dom";
import { Alert } from "../components/Alert";

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function NewPassword() {

  const {resetPassword} = useAuth()
const query = useQuery()
console.log(query.get('oobCode'))

const navigate = useNavigate()
const [newPassword, setNewPassword] = useState('')

const [error, setError] = useState();

const onSubmit =async(e)=>{
  e.preventDefault()
  try{
    resetPassword(query.get('oobCode'), newPassword)
    navigate('/login')
  }catch(error){
    setError(error.message)
  }
}

  return (
    <div className="w-lg h-screen relative bg-gradient-to-b from-slate-500 to-slate-200">
      <div className="w-[296px] absolute inset-y-0 right-14 flex flex-col justify-start items-center">
        <img
          className="h-[150px] left-[868px] top-[49px]"
          src={logo}
        />
        <div className="top-0 relative">
          <h3 className=" text-black text-[20px] font-sans font-medium my-2.5 ">
            Ingresa una nueva contraseña
          </h3>
        </div>
        {error && <Alert message={error} />}
        <div className="w-[296px] h-[180px] relative rounded" id="login">
          <form
            className="w-[296px] h-[180px] left-0 top-0 flex items-center	"
          >
            <div className="w-[296px] h-[50px] top-[15px] left-0 absolute flex items-end">
              <label
                htmlFor="password"
                className="w-[109px] h-[22px] left-0 absolute text-stone-700 text-[12px] font-normal "
              >
                New password
              </label>
              <input
                type="password"
                name="password"
                id="newPassword"
                placeholder="******"
                value={newPassword}
                onChange={e=> setNewPassword(e.target.value)}

                className="w-[296px] h-[25px] left-0 top-[1px] absolute rounded bg-transparent border border-gray-500 text-sm shadow-sm placeholder-slate-500
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-transparent disabled:text-slate-500 disabled:border-b-gray-800 disabled:shadow-none"
              />
            </div>

            <div className="w-[296px] h-[50px] left-0 absolute flex items-end">
              <label
                htmlFor="password"
                className="w-[200px] h-[22px] left-0 absolute text-stone-700 text-[12px] font-normal "
              >
                Repeat new password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"

                className="w-[296px] h-[25px] left-0 top-[1px] absolute rounded bg-transparent border border-gray-500 text-sm shadow-sm placeholder-slate-500
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-transparent disabled:text-slate-500 disabled:border-b-gray-800 disabled:shadow-none"
              />
            </div>
            <div className="w-[158px] h-[38px] left-[61px] top-[139px] absolute">
              <button type="submit" className="w-[158px] h-8 left-0 top-[3px] relative bg-gradient-to-b from-purple-500 to-red-300 hover:bg-purple-400 focus:ring-violet-300  rounded-sm text-white text-sm font-bold px-4 focus:outline-none focus:shadow-outline" onClick={onSubmit}>
                Cambiar
              </button>
            </div>
          </form>
        </div>
        <div className=" relative mb-2 mt-3.5 "> 
            <p className="text-sm flex justify-between"><Link to='/login' className="font-semibold " >Ahora podés ingresar.</Link></p>
          </div>
      </div>
      <div className="w-[700px] h-[477px] left-[33px]  top-4 absolute">
        <img className=" min-h-[300px] object-cover object-right-center w-[700px] h-[477px] rounded" src={portada} />
      </div>
    </div>
  )
}



//      {error && <Alert message={error} />}