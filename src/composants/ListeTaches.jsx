import { useState } from "react";
import Tache from './Tache';

function ListeTaches () {
    const [taches,setTaches] = useState([{ 
                                        "id": 5, 
                                        "titre": "Maîtriser UML", 
                                        "statut": "Terminé" 
                                        }, 
                                        { 
                                        "id": 7, 
                                        "titre": "Réviser JS", 
                                        "statut": "En cours" 
                                        } ])
    const [nouvelleTache,setNouvelleTache] = useState('')
    function ajouter_tache (event) {
        event.preventDefault();
        setTaches([...taches,{
            id:Date.now(),
            titre:nouvelleTache,
            statut: 'En cours'
        }
        ]);
        setNouvelleTache('')
    }
    function supprimer (indice) {
        setTaches(taches.filter((e,index)=> index !== indice))
    }
    function basculerTache(indice) {
        setTaches(taches.map((e, index) =>
            indice === index
                ? {
                    ...e,
                    statut: e.statut === 'Terminé' ? 'En cours' : 'Terminé'
                }
                : e
        ));
    }
    return (
        <div>
            <form onSubmit={ajouter_tache}>
                <input type="text" value={nouvelleTache} onChange={(e)=>setNouvelleTache(e.target.value)}/>
                <button type='submit' onClick={ajouter_tache}>Ajouter</button>
            </form>
            <h2>Liste des Tache</h2>
            <ul>
                {taches.map((e,index)=>
                    <li key={e.id}>
                        <Tache 
                            texte={e.titre}
                            statut={e.statut}
                            supprimer_tache={()=>supprimer(index)}
                            basculerTache={()=>basculerTache(index)}
                        />
                    </li>
                )}
            </ul>
        <p>{taches.filter((e)=> e.statut !== 'Terminé').length} Taches restantes sur {taches.length}</p>
        </div>
    )
}
export default ListeTaches;