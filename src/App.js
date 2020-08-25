import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/clancy'>Gifs de Clancy</Link>
        <Link to='/gif/rugrats'>Gifs de Rugrats</Link>
        <Link to='/gif/simpsons'>Gifs de Simpsons</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
