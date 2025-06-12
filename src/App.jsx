import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/VideoPlayer/Player';
// Firebase's onAuthStateChanged import wapas aa gaya hai
import { onAuthStateChanged } from 'firebase/auth';
// Auth ko aapki Firebase config file se import kiya gaya hai (assuming it's named 'firebase.js' or similar)
import { auth } from './firebase'; 
import { ToastContainer, toast } from 'react-toastify';
 

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Firebase ke authentication state changes ko sunne ka tareeka
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Logged In");
        // Sirf home par redirect karein agar currently /login par hain
        if (window.location.pathname === '/login') {
          navigate('/');
        }
      } else {
        console.log("🚫 Logged Out");
        // Sirf login par redirect karein agar wahaan already nahi hain
        if (window.location.pathname !== '/login') {
          navigate('/login');
        }
      }
    });

    return () => unsubscribe(); // Cleanup function: listener ko hatana
  }, [navigate]); // navigate dependency array mein shamil hai

  return (
    <div>
      {/* Notifications ke liye ToastContainer */}
      <ToastContainer theme='dark'/>
 
      {/* React Router ke routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:imdbId' element={<Player/>} />
      </Routes>
    </div>
  );
};

export default App;
