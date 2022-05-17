import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Ingredient.css"

function Ingredient() {
  const [item, setItem] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const path = 'http://localhost:4300/heka/api/ingredients/' + id;
      fetch(path).then(async response => {
        const newData = await response.json();
        console.log(newData[0]);
        setItem(newData[0]);
      });
    }
    fetchData();
    console.log()
  }, []);

  return (
    <div className="content">
      <label >{item.name}</label>
      {item.categories.map((category) => (
        <label>{category}</label>
      ))}
      {item.nutrients.map((nutrient) => (
        <div>
          <label>{nutrient.name}</label>
          <label>{nutrient.amount}</label>
          <label>{nutrient.unit}</label>
        </div>
      ))}
    </div>
  );
}

export default Ingredient;