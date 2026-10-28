function RecipeItem (props) {
    return (
        <div style={{ border: "1px solid black" }}>
            <img src={props.photo} alt="Photo" width="200" />
            <p>{props.nom}</p>
            <p>{props.categorie}</p>
            <ul>
                {props.ingredients.map((e,i)=>
                    <li key={i}>{e}</li>
                )}
            </ul>
            <p>Difficulte : {'o'.repeat(props.difficulte)}</p>
            <p>{props.description}</p>
            <button onClick={() => props.modifier_recipe(props.indice)}>Modifier</button>
            <button onClick={()=>props.dupliquer_recipe(props.indice)}>Dupliquer</button>
            <button onClick={()=>props.supprimer_recipe(props.indice)}>Supprimer</button>
        </div>
    )
}
export default RecipeItem;