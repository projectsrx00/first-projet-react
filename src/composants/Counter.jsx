import { useState } from "react";
import Valeur from "./Valeur";
import Incrementer from "./Incrementer";
import Decrementer from "./Decrementer";

function Counter() {
    const [count, setCount] = useState(0);

    function incrementer(n) {
        setCount(count + n);
    }

    function decrementer(n) {
        setCount(count - n);
    }

    function initialiser() {
        setCount(0);
    }

    return (
        <div>
            <Valeur valeura={count} />

            <Incrementer incrementer={incrementer} />
            <Decrementer decrementer={decrementer} />

            <button onClick={initialiser}>Initialiser</button>
        </div>
    );
}

export default Counter;
