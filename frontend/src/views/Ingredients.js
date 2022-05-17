import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import IngredientsList from "../Components/Partials/IngredientsList";
import SearchBar from "../Components/Partials/SearchBar";

import "./Ingredients.css";

function Ingredients() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setSelected] = useState(false);
  const [title, setTitle] = useState("Ingredients");
  const [ingredients, setIngredients] = useState([{ id: -1, name: "Grains", image: "/grains.jpg" },
  { id: -2, name: "Meat", image: "/meatandfish.jpg" },
  { id: -3, name: "Vegetables", image: "/vegetables.jpg" },
  { id: -4, name: "Fruit", image: "/fruits.jpg" },
  { id: -5, name: "Beverages", image: "/drinks.jpg" },
  { id: -6, name: "Dairy", image: "/dairy.jpg" },
  { id: -7, name: "Miscellaneous", image: "/miscellaneous.jpg" }]);
  const category = useRef({ id: 0, name: "", image: "" });
  const navigate = useNavigate();

  function selectItem(item) {
    if (category.current.id === 0) {
      const { id, image, name } = item;
      category.current = { id: id, name: name, image: image };
      console.log(item.id);
      setTitle(name);
      setSelected(true);
    } else {
      navigate("/ingredient/" + item.id)
    }
  }

  async function handleSearch(value) {
    console.log(value)
    const path = 'http://localhost:4300/heka/api/ingredients?search=' + value
    await fetch(path).then(async response => {
      const newData = await response.json();
      console.log(newData)
      setIngredients(newData);
      setIsLoading(false)
      setTitle("Search")
      category.current = { id: -7, name: "Miscellaneous", image: "/miscellaneous.jpg" };
    });

  }

  useEffect(() => {
    if (isSelected !== false) {
      setIsLoading(true);
      const cat = category.current;
      let path = ""
      if (cat.id === -1) {
        path = "grains"
      } else if (cat.id === -2) {
        path = "meat"
      } else if (cat.id === -3) {
        path = "vegetables"
      } else if (cat.id === -4) {
        path = "fruit"
      } else if (cat.id === -5) {
        path = "drinks"
      } else if (cat.id === -6) {
        path = "dairy"
      } else if (cat.id === -7) {
        path = "miscellaneous"
      }

      const fetchData = async () => {
        path = 'http://localhost:4300/heka/api/ingredients/' + path
        fetch(path).then(async response => {
          const newData = await response.json();
          console.log(newData)
          setIngredients(newData);
          setIsLoading(false)
        });
      }

      fetchData();
    }
    console.log(ingredients)
    setIsLoading(false)
  }, [isSelected, isLoading])


  if (isLoading) {
    return (
      <div className="center">
        <h1 className="title">{title}</h1>
        <SearchBar />
        <h2 className="title">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="ingredients">
      <h1 className="title">{title}</h1>
      <SearchBar type="text" placeholder="Search for an Ingredient" onSearch={handleSearch} />
      <IngredientsList items={ingredients} category={category.current} onClick={selectItem} />
    </div>
  );
}

export default Ingredients;