import React, {createContext, useContext, useEffect, useReducer} from "react";
import { mealReducer } from "../reducers/mealReducer";
import { startFetchCategories } from "../actions/mealsActions";
import { ADD_TO_FAVORITES } from "../actions/actions";

const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,
    meals: [],
    mealsLoading: false,
    mealsError: false,
    meal: [],
    mealLoading: false,
    mealError: false,
    favorites: [] 
}

const MealContext = createContext({});
export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(mealReducer, initialState);

    useEffect(() => {
        startFetchCategories(dispatch);
    }, []);

    const addToFavorites = (meal) => {
        dispatch({ type: ADD_TO_FAVORITES, payload: meal });
    };

    return (
        <MealContext.Provider value = {{
            ...state,
            dispatch,
            startFetchCategories,
            addToFavorites // Expose the addToFavorites function
        }}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext);
}
