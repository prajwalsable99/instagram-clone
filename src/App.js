// import logo from './logo.svg';
import './App.css';
 import Login from './pages/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import *  as ROUTES from './constants/routes'

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route exact path={ROUTES.LOGIN} element={<Login></Login>}></Route>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
