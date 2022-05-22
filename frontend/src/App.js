import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Body from './Components/layout/Body'
import Home from './views/Home';
import Profile from './views/Profile';
import Recipe from './views/Recipe';
import Ingredients from './views/Ingredients';
import Contact from './views/Contact';
import SignIn from './views/SignIn';


function App() {

  return (
    <Routes>
      <Route element={<Body />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
