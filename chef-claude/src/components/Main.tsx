/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Recipe } from "./Recipe";
import { IngredientList } from "./IngredientList";
import { getRecipeFromMistral } from "./ai.tsx";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipe, setRecipe] = useState("");

  function addIngredient(formData: any) {
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);

    setIngredients((prevIngredients: any) => {
      return [...prevIngredients, newIngredient];
    });
  }

  async function showRecipe() {
    setRecipeShown((prevRecipe) => {
      return !prevRecipe;
    });

    const recipeData = await getRecipeFromMistral(ingredients);
    setRecipe(recipeData ?? "No recipe found.");
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
      {recipeShown && <Recipe recipe={recipe} />}
    </main>
  );
}
