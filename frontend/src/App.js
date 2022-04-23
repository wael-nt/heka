import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Body from './Components/layout/Body'
import Home from './views/Home';
import Profile from './views/Profile';
import Recipe from './views/Recipe';
import Nutrition from './views/Nutrition';

function App() {
  return (
    <Routes>
      <Route element={<Body />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Route>
    </Routes>
  );
}

export default App;
