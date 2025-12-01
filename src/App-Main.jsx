import ClaudeRecipe from './Main-ClaudeRecipe'
import ReqRecommendation from './Main-ReqRecommendation'
import { useState } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [isRecipe, setIsRecipe] = useState(false)

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.length == 0) // this can be customized
            return ;
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function handleRecipe() {
        if (!isRecipe)
            setIsRecipe(arg => !arg)
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

            <ReqRecommendation ingredients={ingredients} ingredientsListItems={ingredientsListItems} handleRecipe={handleRecipe} />
            <ClaudeRecipe isRecipe2={isRecipe} />
        </main>
    )
}