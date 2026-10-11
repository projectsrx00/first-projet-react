import "./App.css";
import Header from "./components/Header/header.jsx";
import Navigation from "./components/Navigation/navigation.jsx";
import Profil from "./components/Content/profil.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Profil />
      <Footer />
    </div>
  );
}

export default App;
