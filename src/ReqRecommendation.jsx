export default function ReqRecommendation(props) {

    return (
        <section>
            {(props.ingredients).length > 0 ? // conditional rendering
                <>
                    <ul id='list'>
                        <h2>Ingredients on hand:</h2>
                        {props.ingredientsListItems}
                    </ul>

                    {(props.ingredients).length > 2 &&  <div className='get-recipe-container'>
                        <div className='get-recipe-inner-container'>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.onClick} >Get a recipe</button>
                    </div>}
                </>
                :
                <ul><h2>List is empty!</h2></ul>}
        </section>
    )
}