/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Recipe } from "./Recipe";
import { IngredientList } from "./IngredientList";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function addIngredient(formData: any) {
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);

    setIngredients((prevIngredients: any) => {
      return [...prevIngredients, newIngredient];
    });
  }

  function showRecipe() {
    setRecipeShown((prevRecipe) => {
      return !prevRecipe;
    });
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="ex: oregano"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList ingredients={ingredients} shownRecipe={showRecipe} />
      )}

      {recipeShown && <Recipe />}
    </main>
  );
}
