import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { TimeMachine2 } from '../models/TimeMachine2';
import { Physics } from '@react-three/rapier';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBADLgkoSxAj5D6XuL-nG76PAnri8yo5us",
  authDomain: "wanrakshak.firebaseapp.com",
  projectId: "wanrakshak",
  storageBucket: "wanrakshak.appspot.com",
  messagingSenderId: "51192366530",
  appId: "1:51192366530:web:2ffef819adbd61baca025b",
  measurementId: "G-V11LZJGL5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        alert('Account created successfully!');
        // Navigate to the desired page after successful registration
        navigate('/NavigationPage');
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage} (${errorCode})`);
      });
  };

  return (
    <div id="position">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="input-field">
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Enter Your Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Enter Your Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
          </div>
          <button id="submit" type="submit">Register</button>
        </form>
      </div>
      <div id="canva">
          <Canvas>
            <ambientLight intensity={3} />
            <pointLight position={[10, 10, 10]} />
            <Physics>
            <TimeMachine2 scale={[0.4, 0.4, 0.4]} />
            </Physics>
            <OrbitControls autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
    </div>
    
  );
};

export default Register;
