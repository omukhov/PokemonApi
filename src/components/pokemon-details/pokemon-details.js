import React, { Component } from 'react';
import PokemonApiService from '../../services/pokemon-api-service';

import './pokemon-details.css';

export default class PokemonDetails extends Component {

  pokemonApiService = new PokemonApiService();

  state = {
    pokemon: null,
    image: null
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
    
    const { pokemonId, getData, getImageUrl } = this.props;

    if (!pokemonId) {
      return;
    }

    getData(pokemonId)
      .then((pokemon) => {
        this.setState({ 
          pokemon,
          image: getImageUrl(pokemon)
         });
    });
  }

  render() {

    const { pokemon, image } = this.state;
    
    if (!this.state.pokemon) {
      return <span>Select a pokemon from a list</span>;
    }

    const {  name, types, height, weight } = pokemon;

    let pokemonTypes = [];
    types.forEach(type => {
        pokemonTypes.push(`${type.type.name} `)     
    })

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} 
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