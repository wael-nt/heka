import React, { useEffect, useRef, useState } from "react";

import Pie from "../Components/Partials/Pie";

import { getStorage } from "../util/storage";

import "./Ingredient.css"

const colors = ['#69BC45', 'yellow', 'purple'];
const colorStrings = ["Green", "Yellow", "Purple"]

function getInitialAmount(nutrients) {
  let amount = 0;
  for (let index = 0; index < nutrients.length; index++) {
    const element = nutrients[index];
    if (element.amount !== 0 && element.unit === 'g') {
      amount = element.amount + amount;
    }
  }
  amount = Math.ceil(amount);
  return amount;
}

function calculateNutrientValues(initialAmount, amount, nutrients) {
  let multiplier = amount / initialAmount;
  let newNutrients = [];
  for (let index = 0; index < nutrients.length; index++) {
    const element = nutrients[index];
    let newValue = (element.amount * multiplier).toFixed(2);
    newNutrients.push({
      name: element.name,
      amount: newValue,
      unit: element.unit
    })
  }
  return newNutrients;
}

function Ingredient(props) {
  const initialValue = getInitialAmount(props.nutrients)
  const [amount, setAmount] = useState(initialValue);
  const [canAdd, setCanAdd] = useState(false);
  const [nutrients, setNutrients] = useState(props.nutrients);
  const input = useRef(initialValue)

  if (props.hasRecipe) {
    const currentRecipe = getStorage("current-recipe");
    const ingredient = currentRecipe.ingredients.filter(item => {
      if (props.id === item.id) {
        return item;
      }
    })
  }

  function handleChange(event) {
    event.preventDefault();
    setAmount(event.target.value)
    props.handleChange(amount)
  }

  const caloricBreakdown = props.caloricBreakdown[0];
  const pieItems = [{ title: "Protein %", value: caloricBreakdown.percentProtein, color: colors[0], clrStr: colorStrings[0] },
  { title: "Fat %", value: caloricBreakdown.percentFat, color: colors[1], clrStr: colorStrings[1] },
  { title: "Carbs %", value: caloricBreakdown.percentCarbs, color: colors[2], clrStr: colorStrings[2] }];

  useEffect(() => {
    let newNutrients = calculateNutrientValues(initialValue, amount, props.nutrients);
    setNutrients(newNutrients);
  }, [amount])

  return (
    <div className="ingredient">
      <div className="section">
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
        <div className="row g-3 ms-3 align-items-center">
          <div className="col-auto">
            <label forhtml="amount" className="col-form-label">{<h4 className="nutrients-title">Amount (g)</h4>}</label>
          </div>
          <div className="col-auto">
            <input
              className="input"
              type="number"
              id="amount"
              placeholder={amount}
              onChange={handleChange}
              name='amount' />
          </div>
        </div>

        <section className="nutrients-plus">
          <div className="pie">
            <Pie items={pieItems} title="The Caloric Make-up" />
            {pieItems.map((item) => (
              <div className="nutrient">
                <h2>{item.title}</h2>
                <h3>{item.value}</h3>
                <h4>{item.clrStr}</h4>
              </div>))
            }
          </div>
          <div className="nutrients-content">
            <h1 className="nutrients-title">Nutrients:</h1>
            <div className="nutrients">
              {nutrients.map((nutrient) => {
                if (nutrient.amount === 0) {
                  return;
                }
                return (<div className="nutrient">
                  <h2>{nutrient.name}</h2>
                  <h3>{nutrient.amount}</h3>
                  <h4>{nutrient.unit}</h4>
                </div>);
              })}
            </div>
          </div>
        </section>
      </div>
    </div >
  );
}

export default Ingredient;