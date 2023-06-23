import {Routes, Route } from "react-router-dom";
import routes from "./confing/routes"
//import { Login } from "./routes/Login";
//import { Register } from "./routes/Register";
//import {Home} from "./routes/Home"


export default function App() {
  return (
      <Routes>
        {
          routes.map((route,index)=>(
            <Route key={index} path={route.path} element={< route.element />}/>
          ))
        }
      </Routes>
  )
}

//<Route path="/" element={<Home/>} />
//<Route path="/login" element = {<Login/>} />
//<Route path="/register" element={<Register/>} />


