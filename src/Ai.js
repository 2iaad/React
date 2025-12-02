export async function generateRecipe(ingredients) {

    const AI_PROMPT = import.meta.env.VITE_AI_PROMPT;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`

    const responseJSON = await fetch( // fetch: built-in JS function to make HTTP requests.
        URL, // URL → the endpoint i want to send the request to.
        { // options object that configures the request (method, headers, body, etc.)
            method: "POST",
            headers: { "Content-Type": "application/json" }, // tells that the data I’m sending is in JSON format.
            body: JSON.stringify( // convert JS object to JSON format
                                    {
                                        contents: [
                                            { parts: [
                                                { text: AI_PROMPT },
                                                { text: `Ingredients: ${ingredients}` }
                                            ] }
                                        ]
                                    }
                                )
        }
    );
    const response = await responseJSON.json(); // parse JSON from response
    console.log(response);
    return response;
}