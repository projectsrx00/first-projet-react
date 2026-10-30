import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserCard() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id]);

    if (!user) {
        return <p>Un erreur...</p>;
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Username : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Téléphone : {user.phone}</p>
            <p>Site web : {user.website}</p>

            <h3>Adresse</h3>
            <p>Rue : {user.address.street}</p>
            <p>Ville : {user.address.city}</p>
            <p>Code postal : {user.address.zipcode}</p>

            <h3>Entreprise</h3>
            <p>Nom : {user.company.name}</p>
            <p>Description : {user.company.catchPhrase}</p>
        </div>
    );
}

export default UserCard;