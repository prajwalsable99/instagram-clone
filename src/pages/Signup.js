import React, { useState, useContext, useEffect } from 'react'
// import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doesUsernameExist, doesEmailExist } from '../services/firebase_services';

import { collection, addDoc } from "firebase/firestore";







export default function Signup() {








    const history = useNavigate();

    const [creds, setCreds] = useState({ email: "", username: "", fullname: "", password: "" });

    const [error, setError] = useState('');

    const { FirebaseCont } = useContext(FirebaseContext);

    const isInvaid = creds.password === '' || creds.email === '' || creds.fullname === '' || creds.username === '';


    const handlesignup = async (e) => {
        e.preventDefault()
        console.log("signup")

        const usernameExists = await doesUsernameExist(creds.username);
        if (!usernameExists) {
            try {
                const doesEmailExists = await doesEmailExist(creds.email);

                if (!doesEmailExists) {
                    const auth = getAuth();
                    createUserWithEmailAndPassword(auth, creds.email, creds.password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user);

                            user.displayName = creds.username;

                            const db = getFirestore(FirebaseCont);
                            addDoc(collection(db, "users"), {
                                userId: user.uid,
                                username: creds.username.toLowerCase(),
                                fullname: creds.fullname,
                                emailAddress: creds.email.toLowerCase(),
                                following: ['2'],
                                followers: [],
                                dateCreated: Date.now()

                            });
                            history(ROUTES.DASHBOARD);
                            // ...
                        })

                } else {
                    setError('That useremail is already taken, please try another.');
                    alert(error)

                }







            } catch (error) {
                setCreds({ email: "", password: "", username: "", fullname: "" })
                setError(error.message);
                alert(error);

            }
        }
        else {

            setError('That username is already taken, please try another.');
            alert(error)
        }
    }






    useEffect(
        () => {
            document.title = 'Signup-Instagram';
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
            <form onSubmit={handlesignup} method="POST" className='loginform' >
                <h2>Signup</h2>

                <div className="mb-3 " >
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={creds.email} aria-describedby="emailHelp" required onChange={(onchange)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3 " >
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name='username' value={creds.username} required onChange={(onchange)} />
                </div>

                <div className="mb-3 " >
                    <label htmlFor="fullname" className="form-label">fullname</label>
                    <input type="text" className="form-control" id="fullname" name='fullname' value={creds.fullname} required onChange={(onchange)} />
                </div>




                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={creds.password} minLength={4} onChange={onchange} />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isInvaid}>Sign up</button>




            </form >







        </div>
    )
}


