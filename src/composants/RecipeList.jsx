import { useState } from "react";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import { useNavigate } from "react-router-dom";

function RecipeList() {
    const navigate = useNavigate();
    const [recettes, setRecettes] = useState([
        {
            photo: "/images/tajine.jpg",
            nom: "Tajine de poulet",
            categorie: "plat",
            ingredients: ["Poulet", "Oignon", "Olives", "Citron"],
            difficulte: 2,
            description: "Un délicieux tajine marocain aux olives."
        },
        {
            photo: "/images/couscous.jpg",
            nom: "Couscous marocain",
            categorie: "plat",
            ingredients: ["Semoule", "Carottes", "Courgettes", "Viande"],
            difficulte: 3,
            description: "Un couscous traditionnel aux légumes."
        },
        {
            photo: "/images/crepes.jpg",
            nom: "Crêpes sucrées",
            categorie: "dessert",
            ingredients: ["Farine", "Lait", "Œufs", "Sucre"],
            difficulte: 1,
            description: "Des crêpes légères et faciles à préparer."
        },
        {
            photo: "/images/salade.jpg",
            nom: "Salade marocaine",
            categorie: "entrée",
            ingredients: ["Tomates", "Concombre", "Oignon", "Persil"],
            difficulte: 1,
            description: "Une salade fraîche et rapide à préparer."
        }
    ]);

    const [indiceModif, setIndiceModif] = useState(null);

    function modifier_recipe(indice) {
        navigate(`/RecipeUpdate/${indice}`);
    }

    function dupliquer_recipe(indice) {
        const nouvelleRecette = {
            ...recettes[indice],
            ingredients: [...recettes[indice].ingredients]
        };

        setRecettes([...recettes, nouvelleRecette]);
    }

    function supprimer_recipe(indice) {
        setRecettes(recettes.filter((e, index) => index !== indice));
    }

    return (
        <div>
            <h1>Liste des recettes</h1>

            {recettes.map((recette, indice) => (
                <div key={indice}>
                    <RecipeItem
                        photo={recette.photo}
                        nom={recette.nom}
                        categorie={recette.categorie}
                        ingredients={recette.ingredients}
                        difficulte={recette.difficulte}
                        description={recette.description}
                        indice={indice}
                        modifier_recipe={modifier_recipe}
                        dupliquer_recipe={dupliquer_recipe}
                        supprimer_recipe={supprimer_recipe}
                    />
                </div>
            ))}
        </div>
    );
}

export default RecipeList;