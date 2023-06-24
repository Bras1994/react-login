import { useAuth } from "../context/authContext";
import Logout from "../components/Logout";

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <h3>Welcome {user.displayName || user.email}</h3>
      <Logout></Logout>
    </div>
  );
}
