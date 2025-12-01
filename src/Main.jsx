import Recommendation from './Recommendation'
import { useState } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [isRecipe, setIsRecipe] = useState(false)

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function handleRecipe() {
        setIsRecipe(boolVar => !boolVar)
    }
    
    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            <section>

                {ingredients.length > 0 ? // conditional rendering
                    <>
                        <ul id='list'>
                            <h2>Ingredients on hand:</h2>
                            {ingredientsListItems}
                        </ul>

                        {ingredients.length > 2 &&  <div className='get-recipe-container'>
                            <div className='get-recipe-inner-container'>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={handleRecipe} >Get a recipe</button>
                        </div>}
                    </>
                    :
                    <ul><h2>List is empty!</h2></ul>}
            
            </section>
            <Recommendation isRecipe2={isRecipe}/>
        </main>
    )
}