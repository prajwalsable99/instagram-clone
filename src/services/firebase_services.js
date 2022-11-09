
import { firebase, fieldvalue } from '../lib/firebase'
import { getFirestore } from '@firebase/firestore';
import { useContext } from 'react';
import firebaseContext from '../context/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  return result.docs.length > 0;
}


export async function doesEmailExist(email) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('emailAddress', '==', email.toLowerCase())
    .get();

  return result.docs.length > 0;
}



