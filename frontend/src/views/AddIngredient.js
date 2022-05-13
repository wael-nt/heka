// import React, { useState } from "react";

// const units = ["\u00b5g", "g", "mg", "IU"];
// let nutr = [
//   {
//     "name": "Vitamin B3",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Folate",
//     "amount": 0.0,
//     "unit": "\u00b5g"
//   },
//   {
//     "name": "Magnesium",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Zinc",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Poly Unsaturated Fat",
//     "amount": 0.0,
//     "unit": "g"
//   },
//   {
//     "name": "Vitamin B6",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Vitamin D",
//     "amount": 0.0,
//     "unit": "\u00b5g"
//   },
//   {
//     "name": "Vitamin B1",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Vitamin A",
//     "amount": 0.0,
//     "unit": "IU"
//   },
//   {
//     "name": "Vitamin B12",
//     "amount": 0.0,
//     "unit": "\u00b5g"
//   },
//   {
//     "name": "Cholesterol",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Mono Unsaturated Fat",
//     "amount": 0.0,
//     "unit": "g"
//   },
//   {
//     "name": "Manganese",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Vitamin C",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Selenium",
//     "amount": 0.0,
//     "unit": "\u00b5g"
//   },
//   {
//     "name": "Net Carbohydrates",
//     "amount": 0.0,
//     "unit": "g"
//   },
//   {
//     "name": "Vitamin B5",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Saturated Fat",
//     "amount": 0.0,
//     "unit": "g"
//   },
//   {
//     "name": "Vitamin B2",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Fiber",
//     "amount": 0.0,
//     "unit": "g"
//   },
//   {
//     "name": "Iron",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Phosphorus",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Carbohydrates",
//     "amount": 0.0,
//     "unit": "g"
//   },
//   {
//     "name": "Lycopene",
//     "amount": 0.0,
//     "unit": "\u00b5g"
//   },
//   {
//     "name": "Sodium",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Calcium",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Potassium",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Calories",
//     "amount": 0.0,
//     "unit": "kcal"
//   },
//   {
//     "name": "Copper",
//     "amount": 0.0,
//     "unit": "mg"
//   },
//   {
//     "name": "Folic Acid",
//     "amount": 0.0,
//     "unit": "\u00b5g"
//   },
//   {
//     "name": "Protein",
//     "amount": 0.0,
//     "unit": "g"
//   },
//   {
//     "name": "Fat",
//     "amount": 0.0,
//     "unit": "g"
//   }
// ];

// function getKeys() {
//   let keys = [];
//   for (let item in food) {
//     for (let i in food[item]) {
//       keys.push(i);
//     }
//   }
//   return keys;
// }

// function AddIngredient() {
//   const [nameState, setNameState] = useState("");
//   const [nutrState, setNutrState] = useState(nutr);
//   const [idState, setIdState] = useState(-1);
//   const [amountState, setAmountState] = useState({ quantity: 1, unit: units[1] });
//   const [possibleUnitsState, setPossibleUnits] = useState(units);
//   const [caloricBreakdownState, setCaloricBreakdownState] = useState([0, 0, 0]);
//   const [categoryState, setCategoryState] = useState("");

//   const [countState, setCountState] = useState(0);

//   const keys = getKeys();

//   async function sendIngredients() {

//     console.log(ingredient);
//     // setNameState(() => {
//     //   return (ingredient.name);
//     // });
//     // setIdState(() => { return (ingredient.id); });
//     // setAmountState((prevState) => {
//     //   return ({ ...prevState, quantity: ingredient.amount });
//     // });
//     // setPossibleUnits(() => {
//     //   return (ingredient.possibleUnits);
//     // });
//     // setNutrState(() => {
//     //   return (ingredient.nutrition.nutrients);
//     // });
//     // setCaloricBreakdownState(() => {
//     //   return ([ingredient.nutrition.caloricBreakdown.percentProtein, ingredient.nutrition.caloricBreakdown.percentFat,
//     //   ingredient.nutrition.caloricBreakdown.percentCarbs]);
//     // });
//     let category = ingredient.categoryPath[1];
//     if (ingredient.categoryPath[1] === null || ingredient.categoryPath[1] === undefined) {
//       category = ingredient.categoryPath[0];
//       // setCategoryState(() => {
//       //   return (ingredient.categoryPath[0]);
//       // });
//     }
//     // } else {
//     //   setCategoryState(() => {
//     //   //   return (ingredient.categoryPath[1]);
//     //   // });
//     // }

//     console.log(ingredient.nutrition.nutrients)
//     const data = {
//       name: ingredient.name,
//       id: ingredient.id,
//       amount: ingredient.amount,
//       possibleUnits: ingredient.possibleUnits,
//       nutrients: ingredient.nutrition.nutrients,
//       caloricBreakdown: [ingredient.nutrition.caloricBreakdown.percentProtein, ingredient.nutrition.caloricBreakdown.percentFat,
//       ingredient.nutrition.caloricBreakdown.percentCarbs],
//       category: category
//     };

//     console.log(data)
//     try {
//       const response = await fetch('http://localhost:4300/heka/api/ingredients/add', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
//       const log = await response.json();
//       console.log(response)
//       console.log({ log })

//     } catch (error) {
//       console.log(error)
//     }
//     setCountState((prevState) => {
//       return (prevState + 1);
//     })
//     setTimeout(1000)
//   }

//   return (
//     <div className="content">
//       <h1>Add New Ingredient</h1>
//       <button onClick={sendIngredients}>Add Ingredients</button>
//     </div>
//   );
// }

// export default AddIngredient;