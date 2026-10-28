import { useState } from "react";

function FilterPage() {
    const [recettes] = useState([
        {
            nom: "Tajine de poulet",
            categorie: "plat"
        },
        {
            nom: "Couscous marocain",
            categorie: "plat"
        },
        {
            nom: "Crêpes sucrées",
            categorie: "dessert"
        },
        {
            nom: "Salade marocaine",
            categorie: "entrée"
        }
    ]);

    const [search, setSearch] = useState("");
    const [cat, setCat] = useState("");

    const categories = [...new Set(
        recettes.map(e => e.categorie)
    )];

    const recettesFiltrees = recettes.filter(e =>
        e.nom.toLowerCase().includes(search.toLowerCase()) &&
        (cat === "" || e.categorie === cat)
    );

    return (
        <div>
            <h1>Filtrer les recettes</h1>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une recette..."
            />

            <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
            >
                <option value="">Toutes les catégories</option>

                {categories.map(e => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>

            <ul>
                {recettesFiltrees.map((e, index) => (
                    <li key={index}>
                        {e.nom} - {e.categorie}
                    </li>
                ))}
            </ul>

            {recettesFiltrees.length === 0 && (
                <p>Aucune recette trouvée.</p>
            )}
        </div>
    );
}

export default FilterPage;