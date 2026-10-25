
function RecipeFilter(props) {
    const categories = [...new Set(
        props.liste.map(e => e.categorie)
    )];

    return (
        <div>
            <input
                type="text"
                value={props.search}
                onChange={(e) =>
                    props.filtrer(e.target.value, props.cat)
                }
                placeholder="Rechercher une recette..."
            />

            <select
                value={props.cat}
                onChange={(e) =>
                    props.filtrer(props.search, e.target.value)
                }
            >
                <option value="">Toutes les catégories</option>

                {categories.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default RecipeFilter;
