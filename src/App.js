// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import *  as ROUTES from './constants/routes'
import UserContext from './context/user';
// import { useContext } from 'react';
import useAuthListener from './hooks/use_auth_listener';
function App() {

  const { user } = useAuthListener();
    return (
  <UserContext.Provider value={{ user }}>

    <BrowserRouter>

      <Routes>

        <Route exact path={ROUTES.DASHBOARD} element={<Dashboard></Dashboard>}></Route>

        <Route exact path={ROUTES.LOGIN} element={<Login></Login>}></Route>

        <Route exact path={ROUTES.SIGNUP} element={<Signup></Signup>}></Route>
       
      </Routes>


    </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;
