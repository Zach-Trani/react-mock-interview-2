import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import MovieChar from './components/MovieChar';

const Home = ({ setCharList }) => {
    const navigate = useNavigate();
    const [movieList, setMovieList] = useState([]);
  
    const getMovieTitles = async () => {
      const response = await axios.get('https://swapi.py4e.com/api/films');
      // const filteredMovieList = response.data.results.map(({ title }) => ({ title }));
      setMovieList(response.data.results);
      console.log(response.data.results);
    };
    
    useEffect(() => {
      getMovieTitles();
    }, []);

    const handleClick = (movieCharacters) => {
      setCharList(movieCharacters);
      navigate('/moviechar');
    }
    
    return (
      <div>
        <div>
          Movie Titles:
        </div>
        {/* map through movie list & return */}
        {movieList.map((movie) => (
          <div>
          <div><button onClick={() => handleClick(movie.characters)}>{movie.title}</button></div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Home;
  