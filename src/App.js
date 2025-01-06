import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import MovieChar from './components/MovieChar';
import { useState } from 'react';


// make api call and return titles to the screen
// when a movie is clicked display characters of that movie
// display those characters on a new page


function App() {

  const [charList, setCharList] = useState();

  return (
    <Routes>
      <Route path='/' element={<Home setCharList={setCharList} />} />
      <Route path='/moviechar' element={<MovieChar charList={charList} />} />
    </Routes>
  );
}

export default App;
