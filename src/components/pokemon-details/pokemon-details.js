import React, { Component } from 'react';
import PokemonApiService from '../../services/pokemon-api-service';

import './pokemon-details.css';

export default class PokemonDetails extends Component {

  pokemonApiService = new PokemonApiService();

  state = {
    pokemon: null
  };

  componentDidMount() {
    this.updatePokemon();
  }

  
  componentDidUpdate(prevProps) {
    if (this.props.pokemonId !== prevProps.pokemonId) {
      this.updatePokemon();
    }
  }

  updatePokemon() {
    
    const { pokemonId } = this.props;

    if (!pokemonId) {
      return;
    }

    this.pokemonApiService
      .getPokemon(pokemonId)
      .then((pokemon) => {
        this.setState({ pokemon });
    });
  }

  render() {

    if (!this.state.pokemon) {
      return <span>Select a pokemon from a list</span>;
    }

    const { id, name, types, height, weight} = this.state.pokemon;

    let pokemonTypes = [];
    types.forEach(type => {
        pokemonTypes.push(`${type.type.name} `)     
    })

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://pokemon-visualguide.com/assets/img/pokemon-sprites/sprites/pokemon/${id}.png`} 
          alt={name}/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">{pokemonTypes.length > 1 ? 'types:' : 'type:'}</span>
              <span>{pokemonTypes}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height</span>
              <span>{height}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Weight</span>
              <span>{weight}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}