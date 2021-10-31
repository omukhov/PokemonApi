import React, { Component } from 'react';
import PokemonApiService from '../../services/pokemon-api-service';

import './item-details.css';

export default class ItemDetails extends Component {

  pokemonApiService = new PokemonApiService();

  state = {
    pokemon: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  
  componentDidUpdate(prevProps) {
    if (this.props.pokemonId !== prevProps.pokemonId) {
      this.updateItem();
    }
  }

  updateItem() {
    
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
    
    if (!pokemon) {
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