import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./routes/Home"
import Login from "./routes/Login"
import Register from "./routes/Register"
import ProtectedRoute from "./components/ProtectedRoute";
import NewPassword from "./routes/NewPassword";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
    </AuthProvider>
  );
}
