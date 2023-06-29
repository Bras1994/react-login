//import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export default function logout() {
    const {logout, loading } = useAuth();
    //const navigate = useNavigate();
  
    const handleLogout = async () => {
      await logout();
      //navigate("/login");
    };
  
    if (loading) return <h1>Loading</h1>
  
    return(
        <>
      <button onClick={handleLogout} className="bg-slate-300 hover:bg-slate-200 rounded py-2 px-4 text-gray-900">Logout</button>
        </>
    )
}