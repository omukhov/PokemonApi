import React, { Component } from 'react';

import Spinner from '../spinner';
import PokemonApiService from '../../services/pokemon-api-service';

import './random-pokemon.css';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPokemon extends Component {

    pokemonApiService = new PokemonApiService();

    state = {
        pokemon: {},
        loading: true
    };

    componentDidMount() {
        this.updatePokemon();
        this.interval = setInterval(this.updatePokemon, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPokemonLoaded = (pokemon) => {
        this.setState({
        pokemon,
        loading: false,
        error: false
        });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePokemon = () => {
        const id = Math.floor(Math.random() * 751);
        this.pokemonApiService
        .getPokemon(id)
        .then(this.onPokemonLoaded)
        .catch(this.onError);
    };

    render() {
        const { pokemon, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PokemonView pokemon={pokemon}/> : null;

        return (
        <div className="random-pokemon jumbotron rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
        );
    }
}

const PokemonView = ({ pokemon }) => {

    const { types, name, height, weight } = pokemon;

    let pokemonTypes = [];
    types.forEach(type => {
        pokemonTypes.push(`${type.type.name} `)     
    })

    return (
        <React.Fragment>
        <img className="pokemon-image"
        id="pic"
            src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`} 
            alt={name}
        /> 

        <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <span className="term">{pokemonTypes.length > 1 ? 'types:' : 'type:'}</span>
                {pokemonTypes}
            </li>     
            <li className="list-group-item">
                <span className="term">Height:</span>
                <span>{height}</span>
            </li>
            <li className="list-group-item">
                <span className="term">Weight:</span>
                <span>{weight}</span>
            </li>
            </ul>
        </div>
        </React.Fragment>
    );
};
