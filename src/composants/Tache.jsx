function Tache (props) {
    return (
        <div>
            <p style={{ textDecoration: props.statut == "Terminé" ? "line-through" : "" }}>
                {`${props.texte}`}</p>
            <input
                type="checkbox"
                checked={props.statut === "Terminé"}
                onChange={() => props.basculerTache(props.indice)}
            />
            <button onClick={()=>props.supprimer_tache(props.indice)}>Supprimer</button>
        </div>
    )
}
export default Tache;