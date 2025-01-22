import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

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
      <ul>{listOfIngredients}</ul>
    </main>
  );
}
