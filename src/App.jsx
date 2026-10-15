import {useState} from 'react';
import Header from './Header.jsx';
function Formulaire () {
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [sadress,setAdress] = useState("");
  const [adress2,setAdress2] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [zip,setZip] = useState("");
  const [tel,setTel] = useState("");
  const [email,setEmail] = useState("");
  const [member,setMember] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit}>
          <label>First Name * </label>
          <input
            type='texte'
            value={fname}
            onChange={(e)=>setFname(e.target.value)}
            required
          /><br/>
          <label>Last Name * </label>
          <input
            type='texte'
            value={lname}
            onChange={(e)=>setLname(e.target.value)}
            required
          /><br/>
          <label>Street Adress * </label>
          <input
            type='texte'
            value={sadress}
            onChange={(e)=>setAdress(e.target.value)}
            required
          /><br/>
          <label>Adress Line 2 </label>
          <input
            type='texte'
            value={adress2}
            onChange={(e)=>setAdress2(e.target.value)}
          /><br/>
          <label>City * </label>
          <input
            type='texte'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            required
          /><br/>
          <label>State * </label>
          <select value={state} onChange={(e)=>setState(e.target.value)}>
            <option value=""></option>
            <option value="California">California</option>
            <option value="Florida">Florida</option>
            <option value="Texas">Texas</option>
            <option value="New York">New York</option>
          </select><br/>
          <label>Zip Code * </label>
          <input
            type='number'
            value={zip}
            onChange={(e)=>setZip(e.target.value)}
            required
          /><br/>
          <label>Phone Number * </label>
          <input
            type='tel'
            value={tel}
            onChange={(e)=>setTel(e.target.value)}
            placeholder='(__)__.___'
            required
          /><br/>
          <label>Email Adress * </label>
          <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          /><br/>
          <label>Choose your membership level * </label>
          <input
                type="radio"
                name="member"
                value="Bronze"
                checked={member === "Bronze"}
                onChange={(e) => setMember(e.target.value)}
            />
            Bronze
            <input
                type="radio"
                name="member"
                value="Silver"
                checked={member === "Silver"}
                onChange={(e) => setMember(e.target.value)}
            />
            Silver
{member}
        </form>
    </div>
  );
}
export default Formulaire;