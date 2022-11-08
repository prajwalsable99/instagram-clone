import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {


 





  const history = useNavigate();

  const [creds, setCreds] = useState({ email: "", password: "" });

  const [error, setError] = useState('');

  const { FirebaseCont } = useContext(FirebaseContext);

  const isInvaid = creds.password === '' || creds.email === '';


  const handlelogin = async(e) => {
    e.preventDefault()
    console.log("submitted")
    const auth = getAuth();
    signInWithEmailAndPassword(auth, creds.email, creds.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
          console.log(user);
          ;
          history(ROUTES.DASHBOARD)


      })
      .catch((error) => {
        setCreds({ email: "", password: "" });
        setError(error.message);
        alert(error.message);
      });
   
  }



  useEffect(
    () => {
      document.title = 'Login-Instagram';
    },
    []);

  const onchange = (e) => {

    setCreds({ ...creds, [e.target.name]: e.target.value })

  }

  return (
    <div className='container  my-3 w-60'>
      <div  >
        <div className="container" style={{ width: "18rem" }}>
          <img src={logo} className="card-img-top" alt="..." />

        </div>
      </div>
      <form onSubmit={handlelogin} method="POST" className='loginform' >
        <h2>Login</h2>

        <div className="mb-3 " >
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={creds.email} aria-describedby="emailHelp" required onChange={(onchange)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={creds.password} minLength={4} onChange={onchange}  />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isInvaid}>Submit</button>

       

        <p className='mt-3'> Don't have an account ? <Link to='/signup'> Create one </Link></p>
      </form >

      {/* {error}&&<p>{error.message}</p> */}





    </div>
  )
}
