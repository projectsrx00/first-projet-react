function Filter (props) {
    return (
        <div>
            <input type="text" value={props.valeur} onChange={(e)=>{
                props.setValeur(e.target.value);
                props.filter(props.liste,e.target.value)}}/>
        </div>
    )
}
export default Filter