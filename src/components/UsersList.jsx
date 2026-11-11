import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../redux/actions";
import { useNavigate } from 'react-router-dom';

export default function UsersList() {
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => dispatch(setUsers(data)));
    }, [dispatch]);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Liste des utilisateurs</h2>

            <input
                type="text"
                placeholder="Rechercher par nom ou email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: "8px", marginBottom: "15px", width: "300px" }}
            />

            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Ville</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate('/AddUser.jsx')}>
                + New User
            </button>
        </div>
    );
}