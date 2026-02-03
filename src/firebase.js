import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9e0WO_2l-lUFhrdzOLnfwq6Q-O1IBOAo",
  authDomain: "netflix-clone-1dc65.firebaseapp.com",
  projectId: "netflix-clone-1dc65",
  storageBucket: "netflix-clone-1dc65.firebasestorage.app",
  messagingSenderId: "750435374636",
  appId: "1:750435374636:web:a3357cf83e6ebd1ea16389"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
    });

  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};


const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

// ✅ LOGOUT
const logout = async () => {
  await signOut(auth);
};

export { auth, db, login, signup, logout };
