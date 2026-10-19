function MoodDisplay(props) {
    return (
        <div>
            <p style={props.value === '' ? {} : { backgroundColor: props.color }}>
                Aujourd'hui je me sens {props.value === '' ? "Aucune humeur" : props.value} !
            </p>
        </div>
    );
}

export default MoodDisplay;
