import Form from './Main-Form'
import ReqRecommendation from './Main-ReqRecommendation'
import ClaudeRecipe from './Main-ClaudeRecipe'
import { useState } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [isRecipe, setIsRecipe] = useState(false)

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
            <Form handleSubmit={handleSubmit} />
            <ReqRecommendation ingredients={ingredients} handleRecipe={handleRecipe} />
            <ClaudeRecipe isRecipe2={isRecipe} />
        </main>
    )
}