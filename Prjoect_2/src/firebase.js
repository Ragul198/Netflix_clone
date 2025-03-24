
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword}from'firebase/auth';
import{collection,getDocs,addDoc} from"firebase/firestore"; 
import { signOut} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBK2POORc2Tbhm8atekNIwTUS15ctoA7tQ",
  authDomain: "netflix-clone-99504.firebaseapp.com",
  projectId: "netflix-clone-99504",
  storageBucket: "netflix-clone-99504.firebasestorage.app",
  messagingSenderId: "141455654363",
  appId: "1:141455654363:web:d2b6e06c474b04d31efbfe"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app) 

const signup=async(name,email,password)=>{
    try{
        const response=await createUserWithEmailAndPassword(auth,email,password)
        const user=response.user;
        await addDoc(collection(db,"users"),{
            Uid:user.uid,
            name,
            authprovider:"local",
            email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout=()=>{
     auth.signOut();
}

export {auth,db,signup,login,logout};