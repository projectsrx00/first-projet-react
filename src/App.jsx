import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./composants/MainPage";
import RecipeFilter from "./composants/RecipeFilter";
import RecipeList from "./composants/RecipeList";
import RecipeCreate from "./composants/RecipeCreate";

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Accueil</Link>
                {" | "}
                <Link to="/search">Filtrer les recettes</Link>
                {" | "}
                <Link to="/recipes">Liste des recettes</Link>
                {" | "}
                <Link to="/createRecipe">Ajouter une recette</Link>
            </nav>

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<RecipeFilter />} />
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/createRecipe" element={<RecipeCreate />} />
            </Routes>
        </div>
    );
}

export default App;