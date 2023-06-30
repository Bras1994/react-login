import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import portada from "../assets/statics/portada.jpg";
import logo from "../assets/statics/logo.png";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Please enter your email");
    try {
      await resetPassword(user.email);
      setError("We sent you email");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-lg h-[1024px] relative bg-gradient-to-b from-slate-500 to-slate-200">
      <div className="w-[296px] h-[840px] absolute inset-y-0 right-14 flex flex-col justify-start items-center">
        <img
          className="h-[200px] left-[868px] top-[49px]"
          src={logo}
        />
        <div className="top-0 relative">
          <h3 className=" text-black text-[24px] font-bold mb-4">
            Solicita tu turno
          </h3>
        </div>

        {error && <Alert message={error} />}
        <div className="w-[296px] h-[446px] relative rounded" id="login">
          <form
            onSubmit={handleSubmit}
            className="w-[296px] h-[220px] left-0 top-0"
          >
            <div className="w-[296px] h-[50px] left-0 top-0 absolute">
              <label
                htmlFor="email"
                className="w-[139px] h-[22px] left-0 top-[30px] absolute text-stone-900 text-[12px] font-normal"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourmail@company.ltd"
                onChange={handleChange}
                className="w-[296px] h-[25px] left-0 top-[1px] absolute bg-gradient-to-r from-neutral-200"
              />
            </div>

            <div className="w-[296px] h-[47px] left-0 top-[67px] absolute">
              <label
                htmlFor="password"
                className="w-[109px] h-[22px] left-0 top-[30px] absolute text-stone-900 text-[12px] font-normal"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                onChange={handleChange}
                className="w-[296px] h-[25px] left-0 top-[1px] absolute bg-gradient-to-r from-neutral-200"
              />
            </div>
            <div className="w-[157px] h-5 left-[195px] top-[94px] absolute justify-start items-center inline-flex">
              <a
                href="#"
                className="text-stone-900 text-opacity-75 text-[11px] font-normal"
                onClick={handleResetPassword}
              >
                Forgot password?{" "}
              </a>
            </div>
            <div className="w-[158px] h-[38px] left-[61px] top-[139px] absolute">
              <button className="w-[158px] h-8 left-0 top-[3px] absolute bg-gradient-to-b from-purple-500 to-red-300 rounded-sm bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                Login
              </button>
            </div>
          </form>

          <div className=" relative my-4 ">
            <p className="text-sm flex justify-between">
              Don´t have an Account{" "}
              <Link to="/register" className="font-semibold ">
                Register
              </Link>
            </p>
          </div>
          <div className="Separador w-60 h-6 left-[21px] relative mb-4">
            <div className="O left-[114px] top-0 absolute text-stone-900 text-[16px] font-normal">
              O
            </div>
            <div className="Line4 w-[100px] h-[0px] left-0 top-[12px] absolute border border-neutral-400"></div>
            <div className="Line5 w-[100px] h-[0px] left-[140px] top-[12px] absolute border border-neutral-400"></div>
          </div>
          <div className="w-[238.13px] h-[29.09px] left-[22px] absolute justify-center items-center inline-flex">
            <button
              onClick={handleGoogleSignin}
              className=" w-[238px] h-7 top-[29.09px] absolute origin-top-left bg-gradient-to-r from-pink-300 to-slate-500 rounded-sm"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
      <div className="w-[700px] h-[477px] left-[33px]  top-4 absolute">
        <img className=" min-h-[300px] object-cover w-[700px] h-[477px]" src={portada} />
      </div>
    </div>
  );
}
