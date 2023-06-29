import { useAuth } from "../context/authContext";
import Logout from "../components/Logout";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="w-full max-w-xs m-auto text-gray-900 ">
      <div className="gb-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl mb-4">Welcome {user.displayName || user.email}</h3>
      </div>

      <Logout></Logout>
    </div>
  );
}
