import React, { useState, useEffect } from "react";
import './App.css';
import buscadorIcono from './buscador.svg';
import TarjetaPelicula from './TarjetaPelicula';

const API_URL = 'http://www.omdbapi.com?apiKey=1e6222ad';

const App = () => {
  const [movies, setMovies] = useState([]);

  const buscadorCine = async (titulo) => {
    const response = await fetch(`${API_URL}&s=${titulo}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    buscadorCine('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>Cine Colombia</h1>
      <div className='busqueda'>
        <input
          placeholder="Buscador de Peliculas"
          value='Spiderman'
          onChange={() => {}}
        />
        <img
          src={buscadorIcono}
          alt='Buscar'
          onClick={() => {}}
        />
      </div>

        {movies?.length>0?(
             <div className="container" >
                {
                    movies.map((movie)=>(
                        <TarjetaPelicula movie1 = {movie}/>
                    ))
                }
                  </div>
        ):(
            <div className='empty' >
                <h2>No se encontraron Peliculas</h2>
            </div>
        )

    }

     
       
    
    </div>
  );
};

export default App;
