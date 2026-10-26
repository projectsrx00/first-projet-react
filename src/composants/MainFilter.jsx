import { useState } from "react";
import Filter from "./Filter";
import Select from "./Select";

function MainFilter() {
    const [valeur,setValeur] = useState('')
    const [select,setSelect] = useState('')
    function rechercher(liste, val) {
        setNouvlist(liste.filter(e => e.nom.includes(val)));
    }
    function seleccioner(liste,type) {
        setNouvlist(liste.filter(e=>e.type==type))
    }
    const [nouvlist,setNouvlist] = useState([])
    const list=[ {nom:"banane",type:"fruit"}, {nom:"orange",type:"fruit"}, {nom:"pomme",type:"fruit"}, {nom:"raisins",type:"fruit"}, {nom:"kiwi",type:"fruit"}, {nom:"tomate",type:"legume"}, {nom:"carotte",type:"legume"}, {nom:"pomme de terre",type:"legume"}, {nom:"navet",type:"legume"}, {nom:"poivron",type:"legume"} ]
    return (
        <div>
            <Filter valeur={valeur} setValeur={setValeur} liste={list} filter={rechercher}/>
            <Select valeur={select} setSelect={setSelect} liste={list} seleccioner={seleccioner}/>
            <ul>
                {nouvlist.map((e,index)=><li key={index}>{e.nom}-{e.type}</li>)}
            </ul>
        </div>
    )
}

export default MainFilter;
