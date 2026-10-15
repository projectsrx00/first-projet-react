import {useState} from 'react';
function App() {
  const [init,setInit] = useState(10);
  function plus () {
      setInit(init + 2)
  }
  function moins () {
    setInit(init - 1)
  }
  return (
    <div>
      <h2>CLICKER COUNTER</h2>
      <button onClick={plus}>+</button>{init}<button onClick={moins}>-</button> 
    </div>
  );
}

export default App;
