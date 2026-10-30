import { useState, useEffect } from "react";
import SearchUser from "./SeachUser";
import { useNavigate } from "react-router-dom";

function Utilisateurs() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [res, setRes] = useState(users);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setRes(data);
            });
    }, []);


    function modifier(user) {
        alert("Modifier : " + user.name);
    }

    function supprimer(id) {
        setUsers(users.filter(user => user.id !== id));
        setRes(res.filter(user => user.id !== id));
    }

    function filter_name(valeur) {
        setRes(users.filter(e =>
            e.name.toLowerCase().includes(valeur.toLowerCase()) ||
            e.email.toLowerCase().includes(valeur.toLowerCase())
        ));
    }

    function filter_ville(city) {
        setRes(users.filter(e => e.address.city === city));
    }

    function filter_ordre(ordre) {
        const liste = [...users].sort((a, b) =>
            ordre === "croissant" ? a.id - b.id : b.id - a.id
        );
        setRes(liste);
    }

    function reinicialiser() {
        setRes(users);
    }

    function modifierUser(utilisateurModifie) {
        fetch(`https://jsonplaceholder.typicode.com/users/${utilisateurModifie.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(utilisateurModifie)
        })
            .then(response => response.json())
            .then(data => {
                setUsers(users.map(u =>
                    u.id === utilisateurModifie.id ? utilisateurModifie : u
                ));

                setRes(users.map(u =>
                    u.id === utilisateurModifie.id ? utilisateurModifie : u
                ));

                navigate("/");
            });
    }
    return (
        <div>
            <h2>Liste des utilisateurs</h2>

            <SearchUser
                liste={users}
                filter_name={filter_name}
                filter_ville={filter_ville}
                filter_ordre={filter_ordre}
                reinicialiser={reinicialiser}
            />

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Utilisateur</th>
                        <th>Email</th>
                        <th>Adresse</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {res.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                            <td>
                                <button onClick={() => navigate(`/user/${user.id}`)}>
                                    Voir
                                </button>
                                <button onClick={() => navigate(`/modifier/${user.id}`)}>
                                    Modifier
                                </button>
                                <button onClick={() => supprimer(user.id)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Utilisateurs;