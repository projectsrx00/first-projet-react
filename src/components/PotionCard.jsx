import { useDispatch } from "react-redux";

function PotionCard(props) {
    const dispatch = useDispatch();
    function supprimerPotion () {
        dispatch({
            type:"DELETE_POTION",
            payload: props.potion.id
        })
    }
    return (
        <div className="potion-card">
            <button onClick={() => dispatch({
                type: "TOGGLE_FAVORITE",
                payload: props.potion.id
            })}>
                {props.potion.favorite ? "★ Retirer des favoris" : "☆ Ajouter aux favoris"}
            </button>
            <h3>{props.potion.name}</h3>
            <p>Catégorie : {props.potion.category}</p>
            <p>Rareté : {props.potion.rarity}</p>
            <p>Prix : {props.potion.price}</p>
            <button onClick={supprimerPotion}>x Supprimer</button>
        </div>
    );
}

export default PotionCard;