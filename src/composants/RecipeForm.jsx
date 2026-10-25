
import { useState } from "react";

function RecipeForm(props) {
    const [nom, setNom] = useState(props.recette ? props.recette.nom : "");
    const [categorie, setCategorie] = useState(props.recette ? props.recette.categorie : "entrée");
    const [ingredients, setIngredients] = useState(props.recette ? props.recette.ingredients : [""]);
    const [difficulte, setDifficulte] = useState(props.recette ? props.recette.difficulte : 1);
    const [description, setDescription] = useState(props.recette ? props.recette.description : "");
    const [photo, setPhoto] = useState(props.recette ? props.recette.photo : "");

    function ajouterIngredient() {
        setIngredients([...ingredients, ""]);
    }

    function modifierIngredient(index, valeur) {
        setIngredients(
            ingredients.map((e, i) => i === index ? valeur : e)
        );
    }

    function supprimerIngredient(index) {
        setIngredients(ingredients.filter((e, i) => i !== index));
    }

    function envoyer(e) {
        e.preventDefault();

        const recette = {
            nom,
            categorie,
            ingredients: ingredients.filter(e => e.trim() !== ""),
            difficulte: Number(difficulte),
            description,
            photo
        };

        if (props.recette) {
            props.modifier_recipe(recette);
        } else {
            props.ajouter_recipe(recette);
        }
    }

    return (
        <form onSubmit={envoyer} style={{ border: "1px solid black", padding: "20px" }}>
            <h2>{props.recette ? "Modifier la recette" : "Ajouter une recette"}</h2>

            <label>Nom :</label>
            <input
                type="text"
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
                        type="text"
                        value={ingredient}
                        onChange={(e) => modifierIngredient(index, e.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => supprimerIngredient(index)}
                    >
                        Supprimer cet ingrédient
                    </button>
                </div>
            ))}

            <button type="button" onClick={ajouterIngredient}>
                Ajouter un ingrédient
            </button>

            <br /><br />

            <label>Difficulté : {difficulte}</label>
            <input
                type="range"
                min="1"
                max="5"
                value={difficulte}
                onChange={(e) => setDifficulte(e.target.value)}
            />

            <br /><br />

            <label>Description :</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <label>Image :</label>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    if (e.target.files[0]) {
                        setPhoto(URL.createObjectURL(e.target.files[0]));
                    }
                }}
            />

            {photo && <img src={photo} alt="Aperçu" width="150" />}

            <br /><br />

            <button type="submit">
                {props.recette ? "Enregistrer les modifications" : "Ajouter la recette"}
            </button>

            <button type="button" onClick={props.annuler}>
                Annuler
            </button>
        </form>
    );
}

export default RecipeForm;
