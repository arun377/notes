import React,{useState,useEffect} from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app"


const firebaseApp = initializeApp({ 
    apiKey: "AIzaSyClCV77YVDSXu9S6oGIYyW5c-85l0LJd3E",
    authDomain: "signin-20e9f.firebaseapp.com",
    projectId: "signin-20e9f",
    storageBucket: "signin-20e9f.appspot.com",
    messagingSenderId: "199661311537",
    appId: "1:199661311537:web:8130e53323677dc27ee710",
    measurementId: "G-GQF8JZ6VXN"
});
const auth = getAuth(firebaseApp);
const Signin = () => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
      onAuthStateChanged(auth,person=>{
        if(person){
          setUser(person);
        }
        else{
          setUser(null);
        }
      })
  
    },[]
    )
    const signInWithGoogle=async()=>{
      try{
        await signInWithPopup(auth,new firebase.auth.GoogleAuthProvider);
   
      }
     
      catch(err)
      {
        console.log(err);
  
      }
    }
  return (
    
        <div>
      <center>
        {user ?

        < div >
      
          
          
          
          <button onClick={()=>auth.signOut()}>Sign out</button>

          

        </div> :
      <button onClick={signInWithGoogle}>sign in with google</button>
      }
      </center>
        
    </div>
      
    
  )
}

export default Signin