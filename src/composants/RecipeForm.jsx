import { useState } from "react";
import "./RecipeForm.css";

function RecipeForm(props) {
    const recette = props.recetteAModifier;

    // En mode édition, le formulaire est pré-rempli avec la recette
    const [nom, setNom] = useState(recette ? recette.nom : "");
    const [categorie, setCategorie] = useState(recette ? recette.categorie : "");
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState(recette ? recette.ingredients : []);

    function ajouterIngredient(e) {
        e.preventDefault();

        if (ingredient.trim() !== "") {
            setIngredients([...ingredients, ingredient]);
            setIngredient("");
        }
    }

    function supprimerIngredient(index) {
        setIngredients(ingredients.filter((e, i) => i !== index));
    }

    function envoyerFormulaire(e) {
        e.preventDefault();

        const nouvelleRecette = {
            nom: nom,
            categorie: categorie,
            ingredients: ingredients
        };

        props.enregistrerRecette(nouvelleRecette);

        setNom("");
        setCategorie("");
        setIngredient("");
        setIngredients([]);
    }

    return (
        <form className="recipe-form" onSubmit={envoyerFormulaire}>
            <label>Nom</label>
            <input
                value={nom}
                placeholder="Ex: Pancakes maison"
                onChange={(e) => setNom(e.target.value)}
                required
            />

            <label>Catégorie</label>
            <select
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                required
            >
                <option value="">Choisir une catégorie</option>
                <option value="Entrée">Entrée</option>
                <option value="Plat principal">Plat principal</option>
                <option value="Dessert">Dessert</option>
                <option value="Boisson">Boisson</option>
                <option value="Salade">Salade</option>
            </select>

            <label>Ingrédients</label>
            <input
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Ex: Tomate"
            />

            <button type="button" className="btn-add-ingredient" onClick={ajouterIngredient}>
                + Ajouter un ingrédient
            </button>

            <ul>
                {ingredients.map((e, index) => (
                    <li key={index}>
                        {e}
                        <button
                            type="button"
                            onClick={() => supprimerIngredient(index)}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>

            <div className="form-actions">
                <button type="submit" className="btn-primary">
                    Enregistrer
                </button>

                <button type="button" className="btn-ghost" onClick={props.annuler}>
                    Annuler
                </button>
            </div>
        </form>
    );
}

export default RecipeForm;
