function Decrementation (props) {
    return (
        <div>
            <button onClick={()=>props.modifier_pas(1)}>1</button>
            <button onClick={()=>props.modifier_pas(2)}>2</button>
            <button onClick={()=>props.modifier_pas(3)}>3</button>
            <button onClick={()=>props.modifier_pas(4)}>4</button>
        </div>
    )
}
export default Decrementation