export const addPotion = (potion) => {
    return {
        type: "ADD_POTION",
        payload: {potion}
    }
};
export const deletePotion = (id) => {
    return {
        type: "DELETE_POTION",
        payload: {id}
    }
};
export const toggleFavorite = (id) => {
    return {
        type: "TOGGLE_FAVORITE",
        payload: id
    };
};
export const filterPotions = (categorie) => {
    return {
        type: "FILTER_POTIONS",
        payload: categorie
    };
};
export const searchPotion = (nom) => {
    return {
        type: "SEARCH_POTION",
        payload: nom
    };
};
export const sortPotions = (ordre) => {
    return {
        type: "SORT_POTIONS",
        payload: ordre
    };
};
export const resetWorkshop = () => {
    return {
        type: "RESET_WORKSHOP"
    };
};