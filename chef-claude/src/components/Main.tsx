/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Recipe } from "./Recipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  const listOfIngredients = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

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
      {listOfIngredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {listOfIngredients}
          </ul>
          {listOfIngredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={showRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )}

      {recipeShown && <Recipe />}
    </main>
  );
}
