
import { useState } from 'react';
import Tache from './Tache';

function ListeTaches() {
    const [taches, setTaches] = useState([
        { id: 5, titre: 'Maîtriser UML', statut: "Terminé" },
        { id: 7, titre: 'Réviser JS', statut: "En cours" }
    ]);

    const [titre, setTitre] = useState('');
    const [statut, setStatut] = useState('En cours');

    function ajouterTache(e) {
        e.preventDefault();

        const nouvelleTache = {
            id: taches.length + 1,
            titre: titre,
            statut: statut
        };

        setTaches([...taches, nouvelleTache]);
        setTitre('');
        setStatut('En cours');
    }

    function supprimerTache(id) {
        setTaches(taches.filter((e) => e.id !== id));
    }

    function basculerTache(id) {
        setTaches(taches.map((e) =>
            e.id === id
                ? { ...e, statut: e.statut === "Terminé" ? "En cours" : "Terminé" }
                : e
        ));
    }

    return (
        <div>
            <form onSubmit={ajouterTache}>
                Titre :
                <input
                    type="text"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                    required
                />

                Statut :
                <select
                    value={statut}
                    onChange={(e) => setStatut(e.target.value)}
                >
                    <option value="En cours">En cours</option>
                    <option value="Terminé">Terminé</option>
                </select>

                <button type="submit">Ajouter</button>
            </form>

            La liste des tâches est :

            <ul>
                {taches.map((e) => (
                    <Tache
                        key={e.id}
                        id={e.id}
                        titre={e.titre}
                        statut={e.statut}
                        supprimer_tache={supprimerTache}
                        basculerTache={basculerTache}
                    />
                ))}
            </ul>

            {taches.filter((e) => e.statut !== "Terminé").length > 0
                ? <p>{taches.filter((e) => e.statut !== "Terminé").length} sur {taches.length}</p>
                : <p>Aucune tâche pour le moment</p>
            }
        </div>
    );
}

export default ListeTaches;
