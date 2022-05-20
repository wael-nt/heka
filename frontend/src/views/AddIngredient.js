// import React, { useEffect, useState } from "react";

// import { UseForm } from "../hooks/form-hook";
// import Input from "../Components/FormElements/Input";
// import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../util/validators";

// import "./AddIngredient.css"

// // const units = ["\u00b5g", "g", "mg", "IU"];
// // let nutr = [
// //   {
// //     "name": "Vitamin B3",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Folate",
// //     "amount": 0.0,
// //     "unit": "\u00b5g"
// //   },
// //   {
// //     "name": "Magnesium",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Zinc",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Poly Unsaturated Fat",
// //     "amount": 0.0,
// //     "unit": "g"
// //   },
// //   {
// //     "name": "Vitamin B6",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Vitamin D",
// //     "amount": 0.0,
// //     "unit": "\u00b5g"
// //   },
// //   {
// //     "name": "Vitamin B1",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Vitamin A",
// //     "amount": 0.0,
// //     "unit": "IU"
// //   },
// //   {
// //     "name": "Vitamin B12",
// //     "amount": 0.0,
// //     "unit": "\u00b5g"
// //   },
// //   {
// //     "name": "Cholesterol",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Mono Unsaturated Fat",
// //     "amount": 0.0,
// //     "unit": "g"
// //   },
// //   {
// //     "name": "Manganese",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Vitamin C",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Selenium",
// //     "amount": 0.0,
// //     "unit": "\u00b5g"
// //   },
// //   {
// //     "name": "Net Carbohydrates",
// //     "amount": 0.0,
// //     "unit": "g"
// //   },
// //   {
// //     "name": "Vitamin B5",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Saturated Fat",
// //     "amount": 0.0,
// //     "unit": "g"
// //   },
// //   {
// //     "name": "Vitamin B2",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Fiber",
// //     "amount": 0.0,
// //     "unit": "g"
// //   },
// //   {
// //     "name": "Iron",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Phosphorus",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Carbohydrates",
// //     "amount": 0.0,
// //     "unit": "g"
// //   },
// //   {
// //     "name": "Lycopene",
// //     "amount": 0.0,
// //     "unit": "\u00b5g"
// //   },
// //   {
// //     "name": "Sodium",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Calcium",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Potassium",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Calories",
// //     "amount": 0.0,
// //     "unit": "kcal"
// //   },
// //   {
// //     "name": "Copper",
// //     "amount": 0.0,
// //     "unit": "mg"
// //   },
// //   {
// //     "name": "Folic Acid",
// //     "amount": 0.0,
// //     "unit": "\u00b5g"
// //   },
// //   {
// //     "name": "Protein",
// //     "amount": 0.0,
// //     "unit": "g"
// //   },
// //   {
// //     "name": "Fat",
// //     "amount": 0.0,
// //     "unit": "g"
// //   }
// // ];

// // function getKeys() {
// //   let keys = [];
// //   for (let item in food) {
// //     for (let i in food[item]) {
// //       keys.push(i);
// //     }
// //   }
// //   return keys;
// // }

// function AddIngredient() {
//   const [formState, inputHandler] = UseForm({
//     name: {
//       value: '',
//       isValid: false,
//     },
//     categories: {
//       value: '',
//       isValid: false,
//     },
//     address: {
//       value: '',
//       isValid: false,
//     }
//   }, false);



//   //   const [countState, setCountState] = useState(0);

//   //   const keys = getKeys();

//   //   async function sendIngredients(ingredient) {
//   //     console.log(ingredient)
//   //     // setNameState(() => {
//   //     //   return (ingredient.name);
//   //     // });
//   //     // setIdState(() => { return (ingredient.id); });
//   //     // setAmountState((prevState) => {
//   //     //   return ({ ...prevState, quantity: ingredient.amount });
//   //     // });
//   //     // setPossibleUnits(() => {
//   //     //   return (ingredient.possibleUnits);
//   //     // });
//   //     // setNutrState(() => {
//   //     //   return (ingredient.nutrition.nutrients);
//   //     // });
//   //     // setCaloricBreakdownState(() => {
//   //     //   return ({
//   //     //     percentProtein: ingredient.nutrition.caloricBreakdown.percentProtein,
//   //     //     percentFat: ingredient.nutrition.caloricBreakdown.percentFat,
//   //     //     percentCarbs: ingredient.nutrition.caloricBreakdown.percentCarbs
//   //     //   });
//   //     // });
//   //     // let category = ingredient.categoryPath;
//   //     // if (ingredient.categoryPath[1] === null || ingredient.categoryPath[1] === undefined) {
//   //     //   category = ingredient.categoryPath[0];
//   //     //   setCategoryState(() => {
//   //     //     return (ingredient.categoryPath[0]);
//   //     //   });

//   //     // } else {
//   //     //   setCategoryState(() => {
//   //     //     return (ingredient.categoryPath[1]);
//   //     //   });
//   //     // }

//   //     const data = {
//   //       name: ingredient.name,
//   //       id: ingredient.id,
//   //       amount: ingredient.amount,
//   //       possibleUnits: ingredient.possibleUnits,
//   //       nutrients: ingredient.nutrition.nutrients,
//   //       caloricBreakdown: {
//   //         percentProtein: ingredient.nutrition.caloricBreakdown.percentProtein,
//   //         percentFat: ingredient.nutrition.caloricBreakdown.percentFat,
//   //         percentCarbs: ingredient.nutrition.caloricBreakdown.percentCarbs
//   //       },
//   //       categories: ingredient.categoryPath
//   //     };

//   //     console.log(data)
//   //     try {
//   //       const response = await fetch('http://localhost:4300/heka/api/ingredients/add', {
//   //         method: 'POST',
//   //         mode: 'cors',
//   //         headers: {
//   //           'Content-Type': 'application/json'
//   //         },
//   //         body: JSON.stringify(data)
//   //       });
//   //       const log = await response.json();
//   //       console.log(response)
//   //       console.log({ log })

//   //     } catch (error) {
//   //       console.log(error)
//   //     }
//   //     setCountState((prevState) => {
//   //       return (prevState + 1);
//   //     })
//   //     setTimeout(1000)
//   //   }

//   //   // for (let index = 0; index < keys.length; index++) {
//   //   //   const ingredient = food[index][keys[index]];
//   //   //   console.log(ingredient.name)
//   //   //   sendIngredients(ingredient)
//   //   //   setTimeout(1000)
//   //   // }

//   function onSubmit() {

//   }

//   useEffect(() => {

//   }, [formState])

//   return (
//     <div className="content">
//       <h1>Add New Ingredient</h1>
//       <div className="form">
//         <Input
//           id="title"
//           type="text"
//           label="Title"
//           element="input"
//           validators={[VALIDATOR_REQUIRE()]}
//           errorText="Please enter a valid title."
//           onInput={inputHandler}
//         />
//         <Input
//           id="description"
//           label="Description"
//           element="textarea"
//           validators={[VALIDATOR_MINLENGTH(5)]}
//           errorText="Please enter a valid description (at least 5 characters)."
//           onInput={inputHandler}
//         />
//         <Input
//           id="address"
//           label="Address"
//           element="input"
//           validators={[VALIDATOR_REQUIRE()]}
//           errorText="Please enter a valid address."
//           onInput={inputHandler}
//         />
//         <Input
//           id="title"
//           type="text"
//           label="Title"
//           element="input"
//           validators={[VALIDATOR_REQUIRE()]}
//           errorText="Please enter a valid title."
//           onInput={inputHandler}
//         />
//         <Input
//           id="description"
//           label="Description"
//           element="textarea"
//           validators={[VALIDATOR_MINLENGTH(5)]}
//           errorText="Please enter a valid description (at least 5 characters)."
//           onInput={inputHandler}
//         />
//         <Input
//           className="input"
//           id="address"
//           label="Address"
//           element="input"
//           validators={[VALIDATOR_REQUIRE()]}
//           errorText="Please enter a valid address."
//           onInput={inputHandler}
//         />
//         <input type="radio" name="recipeType" value="public" id="public" />
//         <label for="public">Public</label>
//         <input type="radio" name="recipeType" value="private" id="private" />
//         <label for="private">Private</label>

//       </div>
//       <button type="submit" disabled={!formState.isValid}>ADD INGREDIENT</button>
//       <button className="button" type="submit" onSubmit={onSubmit}>ADD INGREDIENT</button>
//       {/* <button onClick={sendIngredients}>Add Ingredient</button> */}
//     </div >
//   );
// }

// export default AddIngredient;