import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';


export const AuthContex=createContext(null);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);

    const createuser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
       
    }

  
    const singInUser=(email,password)=>
    {
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // google
    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider);


    }


    const signOutUser=()=>{
        setloading(true);
        return signOut(auth);
    }


    // onAuthStateChanged(auth,currentUser=>{
    //     if(currentUser)
    //     {
    //         console.log('currently logged user',currentUser);
    //         setUser(currentUser);
    //     }
    //     else
    //     {
    //         console.log('No user Login ');
    //         setUser(null);
    //     }
    // })



    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,crueentUser=>{
            console.log('cureent user ',crueentUser);
            setUser(crueentUser);
            setloading(false);
        })
        return ()=>{
            unSubscribe();
        }


    },[])

      
    const name='alamin';
    const AuthInfo={
        user,
        name,
        createuser,
        singInUser,
        signOutUser,
        loading,
        signInWithGoogle,

    };
    


    return (
        <AuthContex.Provider value={AuthInfo}>

            {children}
            
        </AuthContex.Provider >
    );
};

export default AuthProvider;
//51-3 modiule show please