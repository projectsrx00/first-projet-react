
import { useState } from "react";
import RecipeForm from "./RecipeForm";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";
import Pagination from "./Pagination";

function MainPage() {
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

    const [afficherForm, setAfficherForm] = useState(false);
    const [indiceModif, setIndiceModif] = useState(null);
    const [search, setSearch] = useState("");
    const [cat, setCat] = useState("");
    const [page, setPage] = useState(1);

    function modifier_recipe(indice) {
        setIndiceModif(indice);
        setAfficherForm(true);
    }

    function ajouterRecipe(recette) {
        setRecettes([...recettes, recette]);
        setAfficherForm(false);
        setPage(1);
    }

    function enregistrerModification(recette) {
        setRecettes(recettes.map((e, index) =>
            index === indiceModif ? recette : e
        ));

        setAfficherForm(false);
        setIndiceModif(null);
    }

    function dupliquer_recipe(indice) {
        const nouvelleRecette = {
            ...recettes[indice],
            ingredients: [...recettes[indice].ingredients]
        };

        setRecettes([...recettes, nouvelleRecette]);
        setPage(1);
    }

    function supprimer_recipe(indice) {
        setRecettes(recettes.filter((e, index) => index !== indice));
        setPage(1);
    }

    function filtrer(nouveauSearch, nouvelleCat) {
        setSearch(nouveauSearch);
        setCat(nouvelleCat);
        setPage(1);
    }

    const recettesFiltrees = recettes
        .map((recette, indice) => ({ recette, indice }))
        .filter(({ recette }) =>
            recette.nom.toLowerCase().includes(search.toLowerCase()) &&
            (cat === "" || recette.categorie === cat)
        );

    // Nombre de recettes affichées sur chaque page
    const parPage = 2;
    // Calcule le nombre total de pages nécessaires
    const totalPages = Math.ceil(recettesFiltrees.length / parPage);
    // Récupère les recettes correspondant à la page actuelle
    const recettesPage = recettesFiltrees.slice(
        (page - 1) * parPage, // Index de début
        page * parPage        // Index de fin (exclu)
);

    return (
        <div>
            <h1>Creative Recipe Builder</h1>

            <RecipeFilter
                liste={recettes}
                search={search}
                cat={cat}
                filtrer={filtrer}
            />

            <button onClick={() => {
                setIndiceModif(null);
                setAfficherForm(true);
            }}>
                Créer une nouvelle recette
            </button>

            {afficherForm && (
                <RecipeForm
                    recette={
                        indiceModif !== null
                            ? recettes[indiceModif]
                            : null
                    }
                    modifier_recipe={enregistrerModification}
                    ajouter_recipe={ajouterRecipe}
                    annuler={() => {
                        setAfficherForm(false);
                        setIndiceModif(null);
                    }}
                />
            )}

            <RecipeList
                recettes={recettesPage}
                modifier_recipe={modifier_recipe}
                dupliquer_recipe={dupliquer_recipe}
                supprimer_recipe={supprimer_recipe}
            />

            {totalPages > 0 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    setPage={setPage}
                />
            )}

        </div>
    );
}

export default MainPage;
