function Tache (props) {
    return (
        <li style={props.statut === 'Terminé' ? { textDecoration: 'line-through' } : {}}>
            {props.titre} -- <input type="checkbox" onClick={() => props.basculerTache(props.id)} checked={props.statut === "Terminé" ? true : false} />  
            <button onClick={() => props.supprimer_tache(props.id)}>Supprimer</button>      

        </li>
    )
}
export default Tache; 