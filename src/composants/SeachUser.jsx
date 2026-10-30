import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchUser(props) {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("");
    const [ordre, setOrdre] = useState("croissant");

    const villes = [...new Set(
        props.liste.map(e => e.address.city)
    )];

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    props.filter_name(e.target.value);
                }}
                placeholder="Rechercher un utilisateur..."
            />

            <select
                value={select}
                onChange={(e) => {
                    setSelect(e.target.value);
                    props.filter_ville(e.target.value);
                }}
            >
                <option value="">Toutes les villes</option>

                {villes.map(e => (
                    <option key={e} value={e}>{e}</option>
                ))}
            </select>

            <select
                value={ordre}
                onChange={(e) => {
                    setOrdre(e.target.value);
                    props.filter_ordre(e.target.value);
                }}
            >
                <option value="croissant">ID croissant</option>
                <option value="decroissant">ID décroissant</option>
            </select>
            <button onClick={props.reinicialiser}>Reinicialiser</button>
            <button onClick={() => navigate("/ajouter")}>Ajouter</button>
        </div>
    );
}

export default SearchUser;