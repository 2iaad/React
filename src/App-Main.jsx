import Form from './Main-Form'
import ReqRecommendation from './Main-ReqRecommendation'
import ClaudeRecipe from './Main-ClaudeRecipe'
import { generateRecipe } from './Ai'

import { useState } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [Recipe, setRecipe] = useState("")

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.length == 0) // this can be customized
            return ;
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function handleRecipe() {

        const generatedAiRecipe = await generateRecipe(ingredients)
        const aiText = generatedAiRecipe.candidates[0].content.parts[0].text;

        setRecipe(Recipe => aiText)
    }

    return (
        <main>
            <Form handleSubmit={handleSubmit} />
            <ReqRecommendation ingredients={ingredients} handleRecipe={handleRecipe} />
            {Recipe && <ClaudeRecipe Recipe={Recipe} />}
        </main>
    )
}
