import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";

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

  const handleResetPassword = async() => {
    if (!user.email) return setError('Please enter your email')
    try {
      await resetPassword(user.email)
      setError('We sent you email')
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-6 py-8 mb-4">
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
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2" >Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
            className="shadow appearance-none border roundedw-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={handleResetPassword}>Forgot password? </a>
        </div>


      </form>
      <p className="text-sm my-4 flex justify-between">Don´t have an Account <Link to='/register' className="font-semibold " >Register</Link></p>
      <button onClick={handleGoogleSignin} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">Login with Google</button>
    </div>

  )
}
