import StudentProfile from './composants/StudentProfile'
import { useState } from 'react';

function App () {
    const [visible,setVisible] = useState(false);
    function modifier_visibilite () {
        visible ? setVisible(false) : setVisible(true)
    }
    return (
        <div>
            <button onClick={modifier_visibilite}>{visible ? 'Masquer mon profil' : 'Afficher mon profil' }</button>
            {visible ? <StudentProfile /> : <p>Les informations sont masquées</p>}
        </div>
    )
}
export default App;