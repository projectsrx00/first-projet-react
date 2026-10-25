import { useState } from "react";

function StudentProfile () {
    const [isVisible,setIsVisible] = useState(false);
    const nom = 'Rania';
    const filliere = 'DEV';
    function changerEtat () {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }
    return (
        <div>
            <p>
                {isVisible ? `${nom} - ${filliere}` : ''}
            </p> 
            <button onClick={changerEtat}>{
                    isVisible ? 'Masquer' : 'Afficher'
                }
            </button>
            <p>
                {
                    !isVisible ? 'Les informations sont masquées' : ''
                }
            </p>
        </div>
    )
}
export default StudentProfile;