
import RecipeItem from "./RecipeItem";

function RecipeList(props) {
    return (
        <div>
            {props.recettes.map(({ recette, indice }) => (
                <RecipeItem
                    key={indice}
                    photo={recette.photo}
                    nom={recette.nom}
                    categorie={recette.categorie}
                    ingredients={recette.ingredients}
                    difficulte={recette.difficulte}
                    description={recette.description}
                    indice={indice}
                    modifier_recipe={props.modifier_recipe}
                    dupliquer_recipe={props.dupliquer_recipe}
                    supprimer_recipe={props.supprimer_recipe}
                />
            ))}
        </div>
    );
}

export default RecipeList;
