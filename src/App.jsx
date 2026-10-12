import Visiteur from "./composants/Visiteur";
import Client from "./composants/Client";

function App() {
  let connecte = true;
  let name = 'Rania';
  return (
    <div>
      {connecte ? <Client nom={name}/> : <Visiteur/>}
    </div>
  );
}

export default App;
