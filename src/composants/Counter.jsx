import { useState } from "react";
import Valeur from "./Valeur";
import Incrementation from "./Incrementation";
import Decrementation from "./Decrementation";

function Counter () {
    const [counter,setCounter] = useState(0);
    const [pas,setPas] = useState(2)
    function Incrementer () {
        setCounter(counter + pas)
    }
    function Decrementer () {
        setCounter(counter - pas)
    }
    function Initialiser () {
        setCounter(0)
    }
    function modifier_pas (valor) {
        setPas(valor)
    }
    return (
        <div>
            <Valeur val={counter}/>
            <button onClick={Incrementer}>Incrementer</button>
            <button onClick={Decrementer}>Decrementer</button>
            <button onClick={Initialiser}>Initialiser</button>
            <Incrementation modifier_pas={modifier_pas}/>
            <Decrementation modifier_pas={modifier_pas}/>
        </div>
    )
}
export default Counter;