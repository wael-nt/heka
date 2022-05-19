import React, { useEffect } from "react";

import Pie from "../Components/Partials/Pie";

import "./Ingredient.css"

const colors = ['#69BC45', 'yellow', 'purple'];
const colorStrings = ["Green", "Yellow", "Purple"]


function Ingredient(props) {
  console.log(props)
  const caloricBreakdown = props.caloricBreakdown[0];
  const pieItems = [{ title: "Protein %", value: caloricBreakdown.percentProtein, color: colors[0], clrStr: colorStrings[0] },
  { title: "Fat %", value: caloricBreakdown.percentFat, color: colors[1], clrStr: colorStrings[1] },
  { title: "Carbs %", value: caloricBreakdown.percentCarbs, color: colors[2], clrStr: colorStrings[2] }]


  return (
    <div className="ingredient">
      <div className="section">
        <div className="left-section">
          <div className="categories">
            <h2>Categories:</h2>
            {props.categories.map((category) => (
              <h3 className="category">{category.toUpperCase()}</h3>
            ))}
          </div>
          <div className="units">
            <h2>Possible Units of Measure:</h2>
            {props.possibleUnits.map((unit) => (
              <h3 className="unit">{unit}</h3>
            ))}
          </div>
          <h1 className="nutrients-title">Nutrients:</h1>
          <div className="nutrients">
            {props.nutrients.map((nutrient) => {
              if (nutrient.amount !== 0) {
                return (<div className="nutrient">
                  <h2>{nutrient.name}</h2>
                  <h3>{nutrient.amount}</h3>
                  <h4>{nutrient.unit}</h4>
                </div>);
              }
              return;
            })}
          </div>
        </div>
        <div className="right-section">
          <Pie items={pieItems} title="The Caloric Make-up" />
          {pieItems.map((item) => (
            <div className="nutrient">
              <h2>{item.title}</h2>
              <h3>{item.value}</h3>
              <h4>{item.clrStr}</h4>
            </div>))
          }
        </div>
      </div>
    </div>
  );
}

export default Ingredient;