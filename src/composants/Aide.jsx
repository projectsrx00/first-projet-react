import "./Aide.css";

function Aide() {
    return (
        <aside className="aide-card">
            <div className="aide-head">
                <h2>Aide rapide</h2>
                <span className="badge-version">v1.0</span>
            </div>

            <ul className="aide-list">
                <li>
                    Cliquez sur <strong>+ Créer une nouvelle recette</strong> pour
                    ouvrir le formulaire.
                </li>
                <li>
                    Pagination numérotée en bas de la liste.
                </li>
            </ul>
        </aside>
    );
}

export default Aide;
