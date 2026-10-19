function Incrementer({ incrementer }) {
    return (
        <div>
            <p>Pas d'incrémentation</p>
            <button onClick={() => incrementer(1)}>1</button>
            <button onClick={() => incrementer(2)}>2</button>
            <button onClick={() => incrementer(3)}>3</button>
            <button onClick={() => incrementer(4)}>4</button>
        </div>
    );
}

export default Incrementer;
