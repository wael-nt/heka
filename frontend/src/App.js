import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Body from './Components/layout/Body'
import Home from './views/Home';
import Profile from './views/Profile';
import Recipe from './views/Recipe';
import Ingredients from './views/Ingredients';
import Nutrition from './views/Nutrition';
import Contact from './views/Contact';
import SignIn from './views/SignIn';
import Signup from './views/Signup';
import AddIngredient from './views/AddIngredient';
import Ingredient from './views/Ingredient';

function App() {
  return (
    <Routes>
      <Route element={<Body />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-ingredient" element={<AddIngredient />} />
        <Route path='/ingredient/:id' element={<Ingredient />} />
      </Route>
    </Routes>
  );
}

export default App;
