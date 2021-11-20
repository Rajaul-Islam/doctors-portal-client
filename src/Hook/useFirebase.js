import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile,getIdToken } from "firebase/auth";
import { Password } from "@mui/icons-material";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin,setAdmin]=useState(false)
    const [token, setToken]=useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name,'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                setError('');
                history.replace('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            })
            .finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);


        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log('google sign in is clicked');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT')
                setError('');

            }).catch((error) => {

                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            console.log('logout is clicked');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // Signed in 
                setError('');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                console.log(user);
                setUser(user)
                getIdToken(user)
                .then(idToken=>{
                    setToken(idToken);
                    console.log(idToken);
                })

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.admin);
            console.log(data);
            setAdmin(data.admin);
        })
    },[user.email])

    const saveUser = (email, displayName,method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method:method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
    }

    return {
        user,
        admin,
        token,
        isLoading,
        registerUser,
        logout,
        loginUser,
        error,
        signInWithGoogle



    }

}
export default useFirebase;
