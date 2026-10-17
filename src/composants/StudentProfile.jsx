function StudentProfile() {
    const nom = "Ellaghmich";
    const prenom = "Rania";
    const filiere = "Développement Digital";
    
    return (
        <div>
            <h2>Profil de l'étudiant</h2>
            <p>Nom : {nom}</p>
            <p>Prénom : {prenom}</p>
            <p>Filière : {filiere}</p>
        </div>
    );
}

export default StudentProfile;
