import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, User } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { auth } from '../firebase';

function Register() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null); 

  
    const handleSubmit = async (event: any)=> {
      event.preventDefault();
      const { email, password, name} = event.target.elements;
      
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(
          (UserCredential)=>{
            if(UserCredential.user){
              updateProfile(UserCredential.user, {
                displayName: name.value,
              })
            } 
        })
        .catch(function(error) {
          alert(error.message);
        });
      } catch (error) {
        alert(error)
      }

    };

    /* ↓ログインしているかどうかを判定する */
  const [user, setUser] = useState<User | null>(null);

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
          <h1>Register Form</h1>
          <hr />
          <div className='form-container'>
            <div className='form-container-items'>
              <label>name</label>
              <input type="name" placeholder='name' name='name' ref={nameRef}/>
            </div>
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
            <p className='navi'><Link to={`/`} style={{color: 'skyblue', textDecorationLine: 'none'}}>もどる</Link></p>
          </div>
        </form>
      </div>
      )};
    </div>
  )
}

export default Register