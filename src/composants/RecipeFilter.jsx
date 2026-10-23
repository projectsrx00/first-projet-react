import "./RecipeFilter.css";

function RecipeFilter(props) {
    return (
        <div className="recipe-filter">
            <input
                type="text"
                value={props.recherche}
                onChange={(e) => props.setRecherche(e.target.value)}
                placeholder="Rechercher..."
            />

            <select
                value={props.categorie}
                onChange={(e) => props.setCategorie(e.target.value)}
            >
                <option value="">Toutes catégories</option>
                <option value="Entrée">Entrée</option>
                <option value="Plat principal">Plat principal</option>
                <option value="Dessert">Dessert</option>
                <option value="Boisson">Boisson</option>
                <option value="Salade">Salade</option>
            </select>
        </div>
    );
}

export default RecipeFilter;
