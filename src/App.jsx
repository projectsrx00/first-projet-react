import { useState } from 'react';

function App() {
    const [pseudo, setPseudo] = useState('');

    return (
        <div>
            <label>Pseudo :</label>
            <input
                type="text"
                maxLength="20"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
            />
            <p style={{ color: pseudo.length === 20 ? 'red' : 'black' }}>
                {pseudo.length} / 20 caractères
            </p>
            {pseudo !== '' ? <p>Bonjour, {pseudo}</p> : <p>Bonjour, anonyme !</p>}
        </div>
    );
}
export default App;
