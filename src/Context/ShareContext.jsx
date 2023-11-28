import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase";

export const Context = createContext(null);

const auth = getAuth(app);

const ShareContext = ({ children }) => {
    const [user, SetUser] = useState(null)

    const newUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const info = {
        user,
        newUser,
    };
    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default ShareContext;