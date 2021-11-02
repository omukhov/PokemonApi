import React, { Component } from 'react';
import Header from '../header';
import { PokemonPage, ShinyPokemonPage } from '../pages';
import { PokemonApiServiceProvider } from '../pokeapi-service-context';
import RandomPokemon from '../random-pokemon';

import './app.css';
import PokemonApiService from '../../services/pokemon-api-service';
import { BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
    pokemonApiService = new PokemonApiService();

    render() {
        return (
            <PokemonApiServiceProvider value={this.pokemonApiService}>
                <Router>
                    <div className="stardb-app container">
                        <Header />
                        <RandomPokemon />
                        <Route path="/pokemon" component={PokemonPage} />
                        <Route path="/shiny" component={ShinyPokemonPage} />
                    </div>  
                </Router>
            </PokemonApiServiceProvider>
        );
    }
};