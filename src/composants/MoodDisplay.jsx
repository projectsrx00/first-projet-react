function MoodDisplay (props) {
    return (
        <div>
            <p style={{backgroundColor:props.valeur == '' ? '' : props.couleur}}>
                Aujourd'hui, je me sens {props.valeur == '' ? 'rien' : props.valeur}
            </p>
        </div>
    )
}
export default MoodDisplay;