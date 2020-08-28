import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import Detail from './pages/Detail/Detail'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1>App</h1>
        </Link>
        <Route 
          component={Home}
          path="/"
        />
        <Route 
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route 
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
}

export default App;
