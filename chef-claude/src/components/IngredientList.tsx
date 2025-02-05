export function IngredientList(props: any) {
  const listOfIngredients = props.ingredients.map(
    (ingredient: any, index: number) => <li key={index}>{ingredient}</li>
  );

  return (
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
          <button onClick={props.shownRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
