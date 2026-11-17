import { useState } from "react";
import { useDispatch } from "react-redux";

function AddPotion () {
    const [nom,setNom] = useState('');
    const [categorie, setCategorie] = useState('soin');
    const [rarete, setRarete] = useState('commune');
    const [prix,setPrix] = useState(0);

    const dispatch = useDispatch();
    function ajouterPotion() {
        // Vérification des champs obligatoires
        if (nom.trim() === "" || prix <= 0) {
            alert("Veuillez remplir tous les champs obligatoires !");
            return;
        }
        dispatch({
            type: "ADD_POTION",
            payload: {
                id: Date.now(),
                name: nom,
                category: categorie,
                rarity: rarete,
                price: Number(prix),
                favorite: false
            }
        });
        // Vider le formulaire
        setNom("");
        setCategorie("soin");
        setRarete("commune");
        setPrix(0);
    }
    return (
        <div>
            <h2>Fabriquer une potion</h2>
            <hr />
            Nom : *
            <input type="text" value={nom} onChange={(e)=> setNom(e.target.value)}/>
            Categorie : *
            <select value={categorie} onChange={(e)=> setCategorie(e.target.value)} >
                <option value="soin">soin</option>
                <option value="magie">magie</option>
                <option value="protection">protection</option>
            </select>
            Rarete : *
            <select value={rarete} onChange={(e)=> setRarete(e.target.value)}>
                <option value="commune">commune</option>
                <option value="rare">rare</option>
                <option value="légendaire">légendaire</option>
            </select>
            Prix en pieces d'or : *
            <input type="number" step="0.01" value={prix} onChange={(e)=> setPrix(Number(e.target.value))}/>
            <button onClick={ajouterPotion}>
                Fabriquer
            </button>
        </div>
    )
}
export default AddPotion;