import { Routes, Route } from "react-router-dom";
import Utilisateurs from "./composants/Utilisateurs";
import UserCard from "./composants/UserCard";
import AjouterUtilisateur from "./composants/AjouterUtilisateur";
import ModifierUtilisateur from "./composants/ModifierUtilisateur";


function App() {
    return (
            <Routes>
                <Route path="/modifier/:id" element={<ModifierUtilisateur />} />
                <Route path="/" element={<Utilisateurs />} />
                <Route path="/user/:id" element={<UserCard />} />
                <Route path="/ajouter" element={<AjouterUtilisateur />} />
            </Routes>
    );
}

export default App;