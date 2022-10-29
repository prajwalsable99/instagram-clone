import React from 'react'
import { useContext } from 'react'
import firebaseContext from '../context/firebase'
import UserContext from '../context/user'


function Header() {
    const { firebase } = useContext(firebaseContext);
    const { user } = useContext(UserContext);
    return (
<>header</>

    )
}


export default Header;


