import { useAuth } from "../context/authContext";
import Logout from "../components/Logout";
import logo from "../assets/statics/logo.png";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="w-lg h-screen relative bg-gradient-to-b from-slate-500 to-slate-200">
      <div className="w-[296px] absolute inset-y-0 right-14 flex flex-col justify-start items-center">
        <img
          className="h-[150px] left-[868px] top-[49px]"
          src={logo}
        />
        <div className="top-0 relative">
        <h3 className="text-xl mb-4">Welcome {user.displayName || user.email}</h3>
        <Logout></Logout>
        </div>
    </div>
    </div>
  );
}
