import "./RecipeItem.css";

function RecipeItem(props) {
    const niveau = Number(props.difficulte) || 0;

    return (
        <div className="recipe-card">
            <div className="recipe-media">
                {props.photo ? <img src={props.photo} alt={props.nom} /> : "🍽️"}
            </div>

            <div className="recipe-body">
                <div className="recipe-top">
                    <h2>{props.nom}</h2>
                    <span className="badge-cat">{props.categorie}</span>
                </div>

                {props.description && (
                    <p className="recipe-desc">{props.description}</p>
                )}

                <ul className="chips">
                    {props.ingredients.map((e, index) =>
                        <li key={index}>{e}</li>
                    )}
                </ul>

                {niveau > 0 && (
                    <p className="recipe-diff">
                        Difficulté: {"🔥".repeat(niveau)}
                    </p>
                )}
                {props.creeLe && (
                    <p className="recipe-date">Créée: {props.creeLe}</p>
                )}

                <div className="recipe-actions">
                    <button className="btn-modifier" onClick={props.modifierRecette}>
                        Modifier
                    </button>

                    <button className="btn-dupliquer" onClick={props.dupliquerRecette}>
                        Dupliquer
                    </button>

                    <button className="btn-supprimer" onClick={props.supprimerRecette}>
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeItem;
