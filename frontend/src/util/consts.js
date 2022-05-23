export const categories = [{ id: -1, name: "grains", image: "/grains.jpg" },
{ id: -2, name: "meat", image: "/meatandfish.jpg" },
{ id: -3, name: "vegetables", image: "/vegetables.jpg" },
{ id: -4, name: "fruit", image: "/fruits.jpg" },
{ id: -5, name: "drinks", image: "/drinks.jpg" },
{ id: -6, name: "dairy", image: "/dairy.jpg" },
{ id: -7, name: "miscellaneous", image: "/miscellaneous.jpg" }];

export const defaultIngredientState = {
  search: "",
  title: "Ingredients",
  item: {},
  ingredients: categories,
  isItem: false,
  category: { id: 0, name: "", image: "" },
  isCategory: true,
  currentRecipe: {},
  canRemove: false,
  canAdd: false,
  hasRecipe: false,
  hasGrains: false,
  hasMeat: false,
  hasVeggies: false,
  hasFruit: false,
  hasBeverages: false,
  hasDairy: false,
  hasMisc: false,
};

export const ingredientReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': { break }
    case 'REMOVE_ITEM': { break }
    case 'TITLE': { return { ...state, title: action.title } }
    case 'SEARCH': { return { ...state, search: action.search } }
    case 'INGREDIENTS': { return { ...state, ingredients: action.ingredients } }
    case 'SET_INGREDIENT': { return { ...state, item: action.item } }
    case 'SET_RECIPE': { return { ...state, ingredients: action.items } }
    case "CATEGORY": { return { ...state, category: action.category } }
    case "HAS_IS": {
      switch (action.id) {
        case 1: {
          return { ...state, isCategory: action.bool }
        }
        case 2: {
          return { ...state, isItem: action.bool }
        }
        case 3: {
          return { ...state, hasRecipe: action.bool }
        }
        case 4: {
          return { ...state, canAdd: action.bool }
        }
        case 5: {
          return { ...state, canRemove: action.bool }
        }
        case -1: {
          return { ...state, hasGrains: action.bool }
        }
        case -2: {
          return { ...state, hasMeat: action.bool }
        }
        case -3: {
          return { ...state, hasVeggies: action.bool }
        }
        case -4: {
          return { ...state, hasFruit: action.bool }
        }
        case -5: {
          return { ...state, hasBeverages: action.bool }
        }
        case -6: {
          return { ...state, hasDairy: action.bool }
        }
        case -7: {
          return { ...state, hasMisc: action.bool }
        }
        default:
          throw new Error();
      };
    }
    case "DEFAULT": { return defaultIngredientState }
    default:
      throw new Error();
  };
};