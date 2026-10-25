import { useState } from "react";

function Input () {
    const [username,setUsername] = useState('')
    return (
        <div>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <p style={{color: username.length > 20 ? 'red' : 'black'}}>
                {username.length > 20 ? 'Erreur' : ''}
            </p>
            {username.length > 20 ? '' : 
            <p>
                Bonjour, {username.length > 0 ? username : 'anonyme'} !
            </p>}
        </div>
    )
}
export default Input;