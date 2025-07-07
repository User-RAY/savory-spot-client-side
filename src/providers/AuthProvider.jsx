import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updateData) => {
       return updateProfile(auth.currentUser, updateData);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
                                setUser(currentUser);
                                console.log(currentUser);
                                setLoading(false);
                            })
        return () => {
            return unsubscribe();
        }                    

    },[])

    const authCheck = {
        user,
        setUser,
        loading,
        createUser,
        updateUser,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authCheck}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;