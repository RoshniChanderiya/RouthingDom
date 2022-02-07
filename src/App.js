import React from 'react';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Navigation from './Components/Navigation';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
const App = () => {
  let userLogin = false;
  let userData = {
    'st' : "User not logged in"
  }
  return (
      <BrowserRouter> 
      <Navigation />
      <Routes>       
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/dashboard" element={userLogin ? <Dashboard /> : <Navigate to="/login"
         replace state={userData} />}/>
      <Route path="*" element={<Error />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
