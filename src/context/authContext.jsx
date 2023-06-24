import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase";

//onAuthStateChanged es una función que nos retorna el usaurio cada vez que este cambia.

export const authContext = createContext(); //este es el que contine la información

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
 
  const [user,setUser]=useState(null) //El valor inicial es null, porque cuando se inicie la app no va a haber nadie logueado.

  const [loading,setLoading]=useState(true)

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout =()=>{
      signOut(auth)
  }

  const loginWithGoogle =()=>{
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth,googleProvider)
    
  }

  //Este useEffect retorna algo cade vez que le componente se renderiza. 
  //Creo un evento de escucha 'onAuthStateChanged'al que le paso el auth y la función currentUser, que solo nos mostrará información si estamos logueados, en caso de que no su valor será nulo. Permitiendonos saber si el usuario esa logueado o no

  useEffect(() => {
    onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout,loading, loginWithGoogle}}>
      {children}
    </authContext.Provider>
  );
}
