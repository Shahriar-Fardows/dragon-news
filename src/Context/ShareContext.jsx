/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

export const Context = createContext(null);

const auth = getAuth(app);

const ShareContext = ({ children }) => {
    const [user, setUser] = useState(null)

    const newUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LogIn = (email , password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Googleprovider  = new GoogleAuthProvider();

    const google = () =>{
        return signInWithPopup(auth , Googleprovider);
    }

    const GitHubprovider = new GithubAuthProvider();

    const gitHub = () =>{
        return signInWithPopup(auth , GitHubprovider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,  (user) => {
           console.log(user)
           setUser(user)
          });
          return ()=>{
            unsubscribe()
          }
    },[])

    const info = {
        user,
        newUser,
        logOut,
        LogIn,
        google,
        gitHub
     }


    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default ShareContext;