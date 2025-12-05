import Intro from './Main-Intro'
import Form from './Main-Form'
import ReqRecommendation from './Main-ReqRecommendation'
import ClaudeRecipe from './Main-ClaudeRecipe'
import { generateRecipe } from './Ai'

import { useEffect, useState, useRef } from 'react'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [Recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)
    console.log(recipeSection)

    useEffect(() => {
        if (Recipe !== "" && recipeSection.current !== null)
        {
            // recipeSection.current.scrollIntoView({behaviur: "smooth"})
            const temp = recipeSection.current.getBoundingClientRect().top
            window.scroll({
                top: temp,
                behavior: "smooth"
            })
        }

    }, [Recipe])
    
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
            <Intro />
            <Form handleSubmit={handleSubmit} />
            <ReqRecommendation ref={recipeSection} ingredients={ingredients} handleRecipe={handleRecipe} />
            {Recipe && <ClaudeRecipe Recipe={Recipe} />}
        </main>
    )
}
