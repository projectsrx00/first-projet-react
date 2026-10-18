import { useState } from 'react';

function FavoriteMovies() {
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([
        'Inception',
        'Interstellar',
        'The Dark Knight'
    ]);

    function ajouter_film(event) {
        event.preventDefault();

        if (movieName.trim() !== '') {
            setMovies([...movies, movieName]);
            setMovieName('');
        }
    }

    function supprimer_film(id) {
        setMovies(movies.filter((e, index) => index !== id));
    }

    return (
        <div>
            <form onSubmit={ajouter_film}>
                <label>Nom du film</label>

                <input
                    type="text"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                />

                {movieName.trim() === '' && <p>Veuillez entrer un nom.</p>}

                <button type="submit">Ajouter</button>
            </form>

            <p>La liste des films :</p>

            {movies.length === 0
                ? <p>Votre liste de favoris est vide</p>
                : ''
            }

            <ul>
                {movies.map((e, index) => (
                    <li key={index}>
                        {e}
                        <button type="button" onClick={() => supprimer_film(index)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoriteMovies;
