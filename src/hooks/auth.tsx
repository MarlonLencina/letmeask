import { createContext, ReactNode, useCallback, useState, useEffect, useContext } from "react";
import { auth, Firebase } from "../service/firebase";

type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    signWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({children}: AuthContextProviderProps)=> {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
                if(user){
                    const { displayName, photoURL, uid } = user;

                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account.')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => {
            unsubscribe()
        }

    }, [])

    const signWithGoogle = useCallback(async () => {
        const provider = new Firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider);
        if (result.user) {
            const { displayName, photoURL, uid } = result.user;

            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account.')
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, signWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {

    const context = useContext(AuthContext)
    return context

}

export {
    useAuth,
    AuthContextProvider
}