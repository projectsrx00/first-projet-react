
import { useSelector } from "react-redux";

function DashboardHead() {
    const potions = useSelector(state => state.potions);
    const favorites = potions.filter(p => p.favorite === true);

    const valeurTotale = potions.reduce(
        (total, p) => total + p.price, 0
    );
    const totalPiecesOr = valeurTotale;
    const legendaires = potions.filter(
        p => p.rarity === "legendaire"
    );
    return (
        <div>
            <h2>Dashboard</h2>
            <div className="dashboard">
                <div className="dashboard-item">
                    <h3>★ Potions favorites</h3>
                    <p>{favorites.length}</p>
                </div>
                <div className="dashboard-item">
                    <h3>Valeur totale</h3>
                    <p>{valeurTotale} 🪙</p>
                </div>
                <div className="dashboard-item">
                    <h3>Total des pièces d'or</h3>
                    <p>{totalPiecesOr} 🪙</p>
                </div>
                <div className="dashboard-item">
                    <h3>Potions légendaires</h3>
                    <p>{legendaires.length}</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardHead;
