import * as actionTypes from "../actions/actionTypes";
import {updateObject} from '../utility'

const initialState = {
    ingredients: null,
    totalPrice: 150,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 35,
    cheese: 30,
    meat: 70,
    bacon: 50
}

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const updateIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        ingredients: updateIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const updateIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        ingredients: updateIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState)
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 150,
        error: false,
        building: false
    })
}

const fetchIngredientsFalied = (state, action) => {
    return updateObject(state, {error: true})
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)    
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action)
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFalied(state, action)
        default: return state
    }
}

export default reducer