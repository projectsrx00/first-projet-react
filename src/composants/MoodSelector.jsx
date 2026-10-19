
import { useState } from "react";
import MoodDisplay from "./MoodDisplay";

function MoodSelector() {
    const moods = [
        { label: "😊 Heureux", value: "Heureux", color: "#ffeb3b" },
        { label: "😴 Fatigué", value: "Fatigué", color: "#81d4fa" },
        { label: "😡 Stressé", value: "Stressé", color: "#ef9a9a" },
        { label: "😎 Motivé", value: "Motivé", color: "#a5d6a7" }
    ];

    const [humeur, setHumeur] = useState('');
    const [historique, setHistorique] = useState([]);

    function creerHumeur(value, color) {
        setHumeur({
            value: value,
            color: color
        });
    }
    function ajouter_historique(value, color) {
        setHistorique([...historique, {
            value: value,
            color: color
        }]);
    }
    function reinitialiser () {
        setHumeur('');
    }
    function effacer_historique () {
        setHistorique([])
    }
    return (
        <div>
            {moods.map((e) => (
                <button
                    style={{ backgroundColor: e.color }}
                    onClick={() => {
                        creerHumeur(e.value, e.color);
                        ajouter_historique(e.value, e.color);
                    }}>
                    {e.label}
                </button>
            ))}

            <MoodDisplay
                value={humeur ? humeur.value : ''}
                color={humeur ? humeur.color : ''}
            />
            <p>Historique des humeurs :</p>
            <div>
            <ul>
                {historique.map((e)=>
                    <li style={{backgroundColor:e.color}}>{e.value}</li> 
                )
                }
            </ul> 

            </div>
            <button onClick={reinitialiser}>Reinitialiser</button>
            <button onClick={effacer_historique}>Effacer_historique</button>
        </div>
    );
}

export default MoodSelector;
