import React from "react";
import RecipeIngredients from "./RecipeIngredients";
import RecipeForm from "./RecipeForm";

const Recipe = () =>{
    return (
        <div className="recipe">
         <RecipeForm />
         <RecipeIngredients />
        </div>
    );
}


export default Recipe;