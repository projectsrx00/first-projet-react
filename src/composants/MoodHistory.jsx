function MoodHistory (props) {
    return (
        <div>
            <ul>
                {props.historique.map((e)=>
                    <li style={{backgroundColor:e.color}}>{e.value}</li>
                )}
            </ul>
        </div>
    )
}
export default MoodHistory;