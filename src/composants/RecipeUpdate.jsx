import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipeUpdate() {
    const { recipeId } = useParams();
    const navigate = useNavigate();

    const recettes = JSON.parse(localStorage.getItem("recettes")) || [];
    const recette = recettes[Number(recipeId)];

    const [nom, setNom] = useState(recette ? recette.nom : "");
    const [categorie, setCategorie] = useState(recette ? recette.categorie : "entrée");
    const [ingredients, setIngredients] = useState(
        recette ? recette.ingredients : [""]
    );
    const [difficulte, setDifficulte] = useState(recette ? recette.difficulte : 1);
    const [description, setDescription] = useState(recette ? recette.description : "");
    const [photo, setPhoto] = useState(recette ? recette.photo : "");

    function modifierIngredient(index, valeur) {
        setIngredients(
            ingredients.map((e, i) => i === index ? valeur : e)
        );
    }

    function ajouterIngredient() {
        setIngredients([...ingredients, ""]);
    }

    function supprimerIngredient(index) {
        setIngredients(ingredients.filter((e, i) => i !== index));
    }

    function envoyer(e) {
        e.preventDefault();

        recettes[Number(recipeId)] = {
            nom,
            categorie,
            ingredients: ingredients.filter(e => e.trim() !== ""),
            difficulte: Number(difficulte),
            description,
            photo
        };

        localStorage.setItem("recettes", JSON.stringify(recettes));
        navigate("/recipes");
    }

    if (!recette) {
        return (
            <div>
                <h2>Recette introuvable</h2>
                <button onClick={() => navigate("/recipes")}>
                    Retour aux recettes
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={envoyer}>
            <h2>Modifier une recette</h2>

            <label>Nom :</label>
            <input
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
            />

            <br /><br />

            <label>Catégorie :</label>
            <select
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
            >
                <option value="entrée">Entrée</option>
                <option value="plat">Plat</option>
                <option value="dessert">Dessert</option>
                <option value="boisson">Boisson</option>
            </select>

            <br /><br />

            <label>Ingrédients :</label>

            {ingredients.map((ingredient, index) => (
                <div key={index}>
                    <input
                        value={ingredient}
                        onChange={(e) =>
                            modifierIngredient(index, e.target.value)
                        }
                    />
                    <button
                        type="button"
                        onClick={() => supprimerIngredient(index)}
                    >
                        Supprimer
                    </button>
                </div>
            ))}

            <button type="button" onClick={ajouterIngredient}>
                Ajouter un ingrédient
            </button>

            <br /><br />

            <label>Difficulté :</label>
            <input
                type="range"
                min="1"
                max="5"
                value={difficulte}
                onChange={(e) => setDifficulte(e.target.value)}
            />
            {difficulte}

            <br /><br />

            <label>Description :</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <label>Photo (URL) :</label>
            <input
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
            />

            <br /><br />

            <button type="submit">Enregistrer les modifications</button>
            <button type="button" onClick={() => navigate("/recipes")}>
                Annuler
            </button>
        </form>
    );
}

export default RecipeUpdate;
