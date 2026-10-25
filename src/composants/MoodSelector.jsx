import { useState } from "react";
import MoodHistory from "./MoodHistory";
import MoodDisplay from "./MoodDisplay";

function MoodSelector () {
    const moods = [ 
        { label: "😊 Heureux", value: "Heureux", color: "#ffeb3b" }, 
        { label: "😴 Fatigué", value: "Fatigué", color: "#81d4fa" }, 
        { label: "😡 Stressé", value: "Stressé", color: "#ef9a9a" }, 
        { label: "😎 Motivé", value: "Motivé", color: "#a5d6a7" }, 
        ]; 
    const [mood,setMood] = useState({})
    const [listHumor,setListHumor] = useState([])
    function restart () {
        setListHumor([])
    }
    return (
        <div>
            {moods.map((e)=>
                <button style={{backgroundColor: e.color}}
                onClick={()=>{setMood(e);setListHumor([...listHumor,e])}}
                >{e.label}</button>
            )}
        <MoodDisplay valeur={mood.value} couleur={mood.color} />
        <button onClick={restart}>Reset</button>
        <MoodHistory historique={listHumor}/>
        </div>
    )
}
export default MoodSelector;