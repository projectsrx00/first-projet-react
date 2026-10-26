function Select (props) {
    const types = [...new Set(props.liste.map(e=>e.type))]
    return (
        <div>
            <select value={props.select} onChange={(e)=>{
                props.setSelect(e.target.value);
                props.seleccioner(props.liste,e.target.value)}}>
                {types.map((e)=>
                    <option value={e}>{e}</option>
                )}
            </select>
        </div>
    )
}
export default Select;