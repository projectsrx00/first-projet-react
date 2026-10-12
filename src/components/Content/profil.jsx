import Detail from "./detail.jsx";
import General from "./general.jsx";
import Other from "./other.jsx";

function Profil() {
  return (
    <section className="profil" id="profil">
      <h1 className="profil-title">Student Profile Page Design Example</h1>
      <p className="profil-subtitle">A responsive student profile page design.</p>

      <div className="profil-grid">
        <Detail />
        <div className="profil-right">
          <General />
          <Other />
        </div>
      </div>
    </section>
  );
}

export default Profil;
