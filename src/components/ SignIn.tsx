import React, { useRef, useState, useEffect } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase.js";
import { Link, Navigate } from 'react-router-dom';


export function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: any)=> {
      event.preventDefault();

      const { email, password } = event.target.elements ;

      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);

      } catch (error) {
        alert(error)
      }

    };

  const [user, setUser] = useState<User | null>(null);

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
    

  return (
    <div>
      {user ? (
        <Navigate to={`/chat/`} />
      ) : (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <h1>Log in form</h1>
          <hr />
          <div className='form-container'>
            <div className='form-container-items'>
              <label>mail address</label>
              <input type="email" placeholder='mail address' name='email' ref={emailRef} />
            </div>
            <div className='form-container-items'>
              <label>password</label>
              <input type="password" placeholder='password' name='password' ref={passwordRef} />
            </div>
            <button className='form-container-items-button'>log in</button>
            <hr />
            <p className='navi'>はじめての方は<Link to={`/register/`} style={{color: 'skyblue', textDecorationLine: 'none'}}>こちら</Link>から</p>
          </div>
        </form>
      </div>
      )}
    </div>
  )
}


export default SignIn;

