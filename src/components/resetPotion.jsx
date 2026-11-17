import { useDispatch } from "react-redux";
import { resetWorkshop } from "../Redux/Actions";

function ResetWorkshop() {

    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(resetWorkshop())}>
                Réinitialiser l'atelier
            </button>

            <p>
                Restaure l'état initial de l'atelier : les 3 potions de
                départ, l'inventaire d'ingrédients complet, les filtres
                et le formulaire.
            </p>
        </div>
    );
}

export default ResetWorkshop;