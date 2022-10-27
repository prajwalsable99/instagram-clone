import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import firebaseContext from './context/firebase';

import { firebase,fieldvalue } from './lib/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <firebaseContext.Provider value={{firebase,fieldvalue}}>
    <App />
  </firebaseContext.Provider>
);

