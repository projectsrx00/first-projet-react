
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ModifierUtilisateur() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [utilisateur, setUtilisateur] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUtilisateur(data));
    }, [id]);

    function modifier(e) {
        e.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(utilisateur)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Utilisateur modifié :", data);
                navigate("/");
            });
    }

    if (!utilisateur) {
        return <p>Chargement...</p>;
    }

    return (
        <div>
            <h2>Modifier l'utilisateur</h2>

            <form onSubmit={modifier}>
                <label>Nom :</label>
                <input
                    value={utilisateur.name || ""}
                    onChange={e => setUtilisateur({
                        ...utilisateur,
                        name: e.target.value
                    })}
                    required
                />

                <label>Username :</label>
                <input
                    value={utilisateur.username || ""}
                    onChange={e => setUtilisateur({
                        ...utilisateur,
                        username: e.target.value
                    })}
                    required
                />

                <label>Email :</label>
                <input
                    type="email"
                    value={utilisateur.email || ""}
                    onChange={e => setUtilisateur({
                        ...utilisateur,
                        email: e.target.value
                    })}
                    required
                />

                <label>Ville :</label>
                <input
                    value={utilisateur.address?.city || ""}
                    onChange={e => setUtilisateur({
                        ...utilisateur,
                        address: {
                            ...utilisateur.address,
                            city: e.target.value
                        }
                    })}
                    required
                />

                <button type="submit">Enregistrer</button>
                <button type="button" onClick={() => navigate("/")}>
                    Annuler
                </button>
            </form>
        </div>
    );
}

export default ModifierUtilisateur;
