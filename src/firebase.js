import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { toast } from "react-toastify";

// Aapki Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6iqq6xMKrjGx6oL5_DdIqqwA2gSJI1zw",
  authDomain: "netflix-clone-143.firebaseapp.com",
  databaseURL: "https://netflix-clone-143-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-143",
  storageBucket: "netflix-clone-143.appspot.com",
  messagingSenderId: "544922035529",
  appId: "1:544922035529:web:912a74c9be534ed352a698",
  measurementId: "G-SS79VPD048"
};

// Firebase app ko initialize karna
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Google Analytics ko initialize karna
const auth = getAuth(app); // Firebase Authentication service ko initialize karna
const db = getFirestore(app); // Firestore database service ko initialize karna

// Naye user ko register karne ka function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // User profile data ko Firestore mein add karna
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success("Signup successful!"); // Safal signup par toast message
  } catch (error) {
    console.log(error);
    // Error message ko user-friendly format mein display karna
    toast.error(error.code.split('/')[1].split('-').join(""));
  }
};

// Existing user ko login karne ka function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!"); // Safal login par toast message
  } catch (error) {
    console.log(error);
    // Error message ko user-friendly format mein display karna
    toast.error(error.code.split('/')[1].split('-').join(""));
  }
};

// User ko logout karne ka function
const logout = () => {
  signOut(auth);
  toast.info("Logged out successfully."); // Safal logout par toast message
};

// Services aur functions ko export karna
export { auth, db, login, signup, logout };
