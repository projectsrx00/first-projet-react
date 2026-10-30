import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AjouterUtilisateur({ users, setUsers }) {
    const navigate = useNavigate();

    const [nom, setNom] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [rue, setRue] = useState("");
    const [suite, setSuite] = useState("");
    const [ville, setVille] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [telephone, setTelephone] = useState("");
    const [siteWeb, setSiteWeb] = useState("");
    const [entreprise, setEntreprise] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [bs, setBs] = useState("");

    function ajouter(e) {
        e.preventDefault();

        const utilisateur = {
            id: Math.max(0, ...users.map(u => u.id)) + 1,
            name: nom,
            username: username,
            email: email,
            address: {
                street: rue,
                suite: suite,
                city: ville,
                zipcode: codePostal,
                geo: {
                    lat: "0",
                    lng: "0"
                }
            },
            phone: telephone,
            website: siteWeb,
            company: {
                name: entreprise,
                catchPhrase: catchPhrase,
                bs: bs
            }
        };

        setUsers([...users, utilisateur]);
        navigate("/");
    }

    return (
        <div>
            <h2>Créer un utilisateur</h2>

            <form onSubmit={ajouter}>
                {/* Garde ici tous tes champs de formulaire actuels */}
                <label>Nom :</label>
                <input value={nom} onChange={e => setNom(e.target.value)} required />

                <label>Username :</label>
                <input value={username} onChange={e => setUsername(e.target.value)} required />

                <label>Email :</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

                <label>Rue :</label>
                <input value={rue} onChange={e => setRue(e.target.value)} required />

                <label>Appartement :</label>
                <input value={suite} onChange={e => setSuite(e.target.value)} />

                <label>Ville :</label>
                <input value={ville} onChange={e => setVille(e.target.value)} required />

                <label>Code postal :</label>
                <input value={codePostal} onChange={e => setCodePostal(e.target.value)} />

                <label>Téléphone :</label>
                <input value={telephone} onChange={e => setTelephone(e.target.value)} />

                <label>Site web :</label>
                <input value={siteWeb} onChange={e => setSiteWeb(e.target.value)} />

                <label>Entreprise :</label>
                <input value={entreprise} onChange={e => setEntreprise(e.target.value)} />

                <label>Catch phrase :</label>
                <input value={catchPhrase} onChange={e => setCatchPhrase(e.target.value)} />

                <label>Activité :</label>
                <input value={bs} onChange={e => setBs(e.target.value)} />

                <button type="submit">Ajouter</button>
                <button type="button" onClick={() => navigate("/")}>Annuler</button>
            </form>
        </div>
    );
}

export default AjouterUtilisateur;