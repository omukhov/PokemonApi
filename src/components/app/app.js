import React, { Component } from 'react';
import Header from '../header';
import PokemonPage from '../pages';
import { PokemonApiServiceProvider } from '../pokeapi-service-context';
import RandomPokemon from '../random-pokemon';

import './app.css';
import PokemonApiService from '../../services/pokemon-api-service';

export default class App extends Component {
    pokemonApiService = new PokemonApiService();

    render() {
        return (
            <PokemonApiServiceProvider value={this.pokemonApiService}>
                <div className="stardb-app container">
                    <Header />
                    <RandomPokemon />
                    <PokemonPage />
                </div>
            </PokemonApiServiceProvider>
        );
    }
};