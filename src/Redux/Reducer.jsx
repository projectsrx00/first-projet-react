const initialState = {
    potions: [
        {
            id: 1,
            name: "Potion de Soin Mineur",
            category: "soin",
            rarity: "commune",
            price: 50,
            favorite: true
        },
        {
            id: 2,
            name: "Élixir de Vision Arcane",
            category: "magie",
            rarity: "rare",
            price: 180,
            favorite: false
        },
        {
            id: 3,
            name: "Bouclier d'Astralée",
            category: "protection",
            rarity: "legendaire",
            price: 420,
            favorite: true
        }
    ],
    potionsFiltrees: [
        {
            id: 1,
            name: "Potion de Soin Mineur",
            category: "soin",
            rarity: "commune",
            price: 50,
            favorite: true
        },
        {
            id: 2,
            name: "Élixir de Vision Arcane",
            category: "magie",
            rarity: "rare",
            price: 180,
            favorite: false
        },
        {
            id: 3,
            name: "Bouclier d'Astralée",
            category: "protection",
            rarity: "legendaire",
            price: 420,
            favorite: true
        }
    ],
    filtre: "Toutes",
    recherche: ""
};
//state = {
//    potions: [...],
//    potionsFiltrees: [...],
//    filtre: "Toutes",
//    recherche: ""
//}
function reducer(state = initialState, action) {
    switch (action.type) {

        case "ADD_POTION": {
            const nouvellesPotions = [...state.potions, action.payload];

            return {
                ...state,
                potions: nouvellesPotions,
                potionsFiltrees: nouvellesPotions
            };
        }

        case "DELETE_POTION": {
            const nouvellesPotions = state.potions.filter(
                p => p.id !== action.payload
            );

            return {
                ...state,
                potions: nouvellesPotions,
                potionsFiltrees: nouvellesPotions
            };
        }

        case "TOGGLE_FAVORITE":
            return {
                ...state,
                potions: state.potions.map(potion =>
                    potion.id === action.payload
                        ? { ...potion, favorite: !potion.favorite }
                        : potion
                )
            };

       case "FILTER_POTIONS":
            return {
                ...state,
                filtre: action.payload,
                potionsFiltrees: state.potions.filter(p =>
                    action.payload === "Toutes" ||
                    p.category === action.payload
                )
            };
        case "SEARCH_POTION":
            return {
                ...state,
                recherche: action.payload,
                potionsFiltrees: state.potions.filter(p =>
                    (state.filtre === "Toutes" ||
                        p.category === state.filtre) &&
                    p.name.toLowerCase().includes(action.payload.toLowerCase())
                )
            };
        case "SORT_POTIONS":
            return {
                ...state,
                potionsFiltrees: [...state.potions].sort((a, b) =>
                    action.payload === "asc"
                        ? a.price - b.price
                        : b.price - a.price
                )
            };
        case "RESET_WORKSHOP":
            return initialState;
        default:
            return state;
    }
}

export default reducer;
