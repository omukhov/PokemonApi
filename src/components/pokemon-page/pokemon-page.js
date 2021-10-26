import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list';
import PokemonDetails from '../pokemon-details';

export default class PokemonPage extends Component {

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
                    <ItemList onItemSelected={this.onPokemonSelected}/>
                </div>
                <div className="col-md-6">
                    <PokemonDetails pokemonId={this.state.selectedPokemon}/>
                </div>
            </div>
        );
    }
};
