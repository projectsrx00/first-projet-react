
function Decrementer({ decrementer }) {
    return (
        <div>
            <p>Pas de décrémentation</p>
            <button onClick={() => decrementer(1)}>1</button>
            <button onClick={() => decrementer(2)}>2</button>
            <button onClick={() => decrementer(3)}>3</button>
            <button onClick={() => decrementer(4)}>4</button>
        </div>
    );
}

export default Decrementer;
