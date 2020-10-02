import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import Detail from './pages/Detail/Detail'
import { Link, Route } from 'wouter'
import Context from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'

function App() {
  return (
    <Context.Provider value={{nombre:'daniel'}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1 style={{margin: "20px", cursor: "pointer"}}>App Gifs</h1>
          </Link>
          <GifsContextProvider>
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
        </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
