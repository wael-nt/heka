import React, { useEffect, useRef, useState } from "react";

import IngredientsList from "../Components/Partials/IngredientsList";

import "./Ingredients.css";

function Ingredients() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedState, setSelected] = useState(false);
  const ingredients = useRef([])

  useEffect(() => {
    if (selectedState === false) {
      ingredients.current = [{ id: -1, name: "Grains", image: "/grains.jpg" },
      { id: -2, name: "Meat", image: "/meatandfish.jpg" },
      { id: -3, name: "Vegetables", image: "/vegetables.jpg" },
      { id: -4, name: "Fruits", image: "/fruits.jpg" },
      { id: -5, name: "Beverages", image: "/drinks.jpg" },
      { id: -6, name: "Dairy", image: "/dairy.jpg" },
      { id: -7, name: "Miscellaneous", image: "/miscellaneous.jpg" }]
      setIsLoading(false);
    }
  }, [selectedState])


  if (isLoading) {
    return (
      <div className="center">
        <h2 className="title">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="content">
      <h1 className="title">Whole Foods Page</h1>
      <IngredientsList items={ingredients.current} onClick={() => { setSelected(true) }} />
    </div>
  );
}

export default Ingredients;