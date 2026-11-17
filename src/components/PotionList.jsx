import { useSelector } from "react-redux";
import PotionCard from "./PotionCard";

function PotionList() {

    const potions = useSelector(state => state.potionsFiltrees);

    return (
        <div className="potion-list">
            {potions.map(potion => (
                <PotionCard
                    key={potion.id}
                    potion={potion}
                />
            ))}

            {potions.length === 0 && (
                <p>Aucune potion trouvée.</p>
            )}
        </div>
    );
}

export default PotionList;