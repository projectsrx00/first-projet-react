import RecipeItem from "./RecipeItem";

function RecipeList(props) {
    return (
        <div className="recipe-list">
            {props.recettes.length === 0 && (
                <p className="recipe-empty">Aucune recette pour le moment.</p>
            )}

            {props.recettes.map((recette) => (
                <RecipeItem
                    key={recette.id}
                    photo={recette.photo}
                    nom={recette.nom}
                    categorie={recette.categorie}
                    ingredients={recette.ingredients}
                    difficulte={recette.difficulte}
                    description={recette.description}
                    creeLe={recette.creeLe}
                    modifierRecette={() => props.modifierRecette(recette.id)}
                    dupliquerRecette={() => props.dupliquerRecette(recette.id)}
                    supprimerRecette={() => props.supprimerRecette(recette.id)}
                />
            ))}
        </div>
    );
}

export default RecipeList;
