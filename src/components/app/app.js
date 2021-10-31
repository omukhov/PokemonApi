import React, { Component } from 'react';
import Header from '../header';
import PokemonPage from '../pokemon-page/pokemon-page';

import RandomPokemon from '../random-pokemon';

import './app.css';
export default class App extends Component {
    
    render() {
        return (
            <div className="stardb-app container">
            
                <Header />
                <RandomPokemon />
                <PokemonPage />
            </div>
        );
    }
};