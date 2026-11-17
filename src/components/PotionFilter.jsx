import { useDispatch } from "react-redux";
import { filterPotions } from "../Redux/Actions";
import { searchPotion } from "../Redux/Actions";
import { sortPotions } from "../Redux/Actions";
function PotionFilter() {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(filterPotions("Toutes"))}>
                Toutes
            </button>
            <button onClick={() => dispatch(filterPotions("soin"))}>
                Soin
            </button>
            <button onClick={() => dispatch(filterPotions("magie"))}>
                Magie
            </button>
            <button onClick={() => dispatch(filterPotions("protection"))}>
                Protection
            </button>

            <input
                type="text"
                placeholder="Rechercher une potion..."
                onChange={(e) => dispatch(searchPotion(e.target.value))}
            />

            <button onClick={() => dispatch(sortPotions("asc"))}>
                Prix croissant
            </button>

            <button onClick={() => dispatch(sortPotions("desc"))}>
                Prix décroissant
            </button>    
        </div>
    );
}

export default PotionFilter;