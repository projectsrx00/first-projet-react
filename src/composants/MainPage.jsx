import { useState } from "react";
import RecipeFilter from "./RecipeFilter";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import Aide from "./Aide";
import Pagination from "./Pagination";
import "./MainPage.css";

function MainPage() {
    const [recettes, setRecettes] = useState([
  {
    id: 1,
    nom: "Tortilla de pommes de terre",
    categorie: "Plat principal",
    description: "Classique espagnole, moelleuse à l'intérieur.",
    ingredients: ["pommes de terre", "œufs", "oignon", "huile", "sel"],
    difficulte: "Facile",
    date: "2024-03-12",
    emoji: "🍳",
    image: null
  },
  {
    id: 2,
    nom: "Gaspacho andalou",
    categorie: "Entrée",
    description: "Frais, idéal pour l'été.",
    ingredients: ["tomate", "concombre", "poivron", "ail", "huile", "vinaigre"],
    difficulte: "Facile",
    date: "2024-06-01",
    emoji: "🥤",
    image: null
  },
  {
    id: 3,
    nom: "Paella valencienne",
    categorie: "Plat principal",
    description: "Riz au poulet, lapin et safran.",
    ingredients: ["riz", "poulet", "lapin", "haricots", "safran", "bouillon"],
    difficulte: "Moyenne",
    date: "2024-05-20",
    emoji: "🥘",
    image: null
  },
  {
    id: 4,
    nom: "Croquettes au jambon",
    categorie: "Entrée",
    description: "Crémeuses à l'intérieur, croustillantes à l'extérieur.",
    ingredients: ["jambon", "lait", "farine", "beurre", "chapelure"],
    difficulte: "Moyenne",
    date: "2024-02-14",
    emoji: "🥟",
    image: null
  },
  {
    id: 5,
    nom: "Poulpe à la galicienne",
    categorie: "Plat principal",
    description: "Avec pommes de terre, paprika et huile d'olive.",
    ingredients: ["poulpe", "pommes de terre", "paprika", "huile", "gros sel"],
    difficulte: "Moyenne",
    date: "2024-07-08",
    emoji: "🐙",
    image: null
  }
]);
    const [modal, setModal] = useState(false);
    const [recetteAModifier, setRecetteAModifier] = useState(null);
    const [page, setPage] = useState(1);
    const [recherche, setRecherche] = useState("");
    const [categorie, setCategorie] = useState("");

    function normaliser(texte) {
        return texte
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    const recettesFiltrees = recettes.filter((r) => {
        const correspondNom = normaliser(r.nom).includes(normaliser(recherche.trim()));
        const correspondCategorie = categorie === "" || r.categorie === categorie;
        return correspondNom && correspondCategorie;
    });

    const recettesParPage = 3;
    const totalPages = Math.max(1, Math.ceil(recettesFiltrees.length / recettesParPage));
    const pageCourante = Math.min(page, totalPages);

    const debut = (pageCourante - 1) * recettesParPage;
    const recettesAffichees = recettesFiltrees.slice(debut, debut + recettesParPage);

    function changerRecherche(valeur) {
        setRecherche(valeur);
        setPage(1);
    }

    function changerCategorie(valeur) {
        setCategorie(valeur);
        setPage(1);
    }

    function ouvrirCreation() {
        setRecetteAModifier(null);
        setModal(true);
    }

    function fermerModal() {
        setModal(false);
        setRecetteAModifier(null);
    }

    function modifierRecette(id) {
        const recette = recettes.find((r) => r.id === id);

        if (recette) {
            setRecetteAModifier(recette);
            setModal(true);
        }
    }

    function enregistrerRecette(recette) {
        if (recetteAModifier) {
            setRecettes(
                recettes.map((r) =>
                    r.id === recetteAModifier.id ? { ...r, ...recette } : r
                )
            );
        } else {
            setRecettes([...recettes, { ...recette, id: Date.now() }]);
        }

        fermerModal();
    }

    function supprimerRecette(id) {
        setRecettes(recettes.filter((r) => r.id !== id));
    }

    function dupliquerRecette(id) {
        const recette = recettes.find((r) => r.id === id);

        if (recette) {
            setRecettes([
                ...recettes,
                { ...recette, id: Date.now() }
            ]);
        }
    }

    return (
        <div className="page">
            <header className="page-header">
                <h1 className="page-title">🍽️ Creative Recipe Builder</h1>

                <div className="header-actions">
                    <RecipeFilter
                        recherche={recherche}
                        setRecherche={changerRecherche}
                        categorie={categorie}
                        setCategorie={changerCategorie}
                    />

                    <button className="btn-primary" onClick={ouvrirCreation}>
                        + Créer une nouvelle recette
                    </button>
                </div>
            </header>

            {modal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-head">
                            <h2>
                                {recetteAModifier ? "Modifier la recette" : "Nouvelle recette"}
                            </h2>

                            <button className="btn-ghost" onClick={fermerModal}>
                                Fermer
                            </button>
                        </div>

                        <RecipeForm
                            key={recetteAModifier ? recetteAModifier.id : "nouvelle"}
                            recetteAModifier={recetteAModifier}
                            enregistrerRecette={enregistrerRecette}
                            annuler={fermerModal}
                        />
                    </div>
                </div>
            )}

            <div className="layout">
                <main>
                    <RecipeList
                        recettes={recettesAffichees}
                        modifierRecette={modifierRecette}
                        supprimerRecette={supprimerRecette}
                        dupliquerRecette={dupliquerRecette}
                    />

                    <Pagination
                        page={pageCourante}
                        setPage={setPage}
                        totalPages={totalPages}
                    />
                </main>

                <Aide />
            </div>
        </div>
    );
}

export default MainPage;
