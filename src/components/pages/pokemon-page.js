import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import PokemonApiService from '../../services/pokemon-api-service';
import { PokemonList, PokemonDetails, ShinyPokemonDetails } from "../pk-components";

export default class PokemonPage extends Component {

    pokemonApiService = new PokemonApiService();

    state = {
        selectedPokemon: 3,
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    onPokemonSelected = (id) => {
        this.setState({
            selectedPokemon: id
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <PokemonList 
                        onItemSelected={this.onPokemonSelected}
                        />
                </div> 
                <div className="col-md-6">
                    <PokemonDetails 
                        itemId={this.state.selectedPokemon}/>
                    <ShinyPokemonDetails 
                        itemId={this.state.selectedPokemon}/>
                </div>
            </div>
        );
    }
};
