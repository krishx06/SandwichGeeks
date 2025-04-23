import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Ambience from './pages/Ambience.jsx';
import Signup from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import LocationContact from './pages/LocationContact.jsx';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ambience" element={<Ambience />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/locationcontact" element={<LocationContact />} />
      </Routes>
    </Router>
  );
};

export default App;
