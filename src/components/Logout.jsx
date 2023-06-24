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
      <button onClick={handleLogout}>Logout</button>
        </>
    )
}