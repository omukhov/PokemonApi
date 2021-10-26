import React, { Component } from 'react';
import PokemonApiService from '../../services/pokemon-api-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

    pokemonApiService = new PokemonApiService();

    state = {
        pokemonList: null
    };

    componentDidMount() {
        this.pokemonApiService
            .getAllPokemons()
            .then((pokemonList) => {
                this.setState({
                    pokemonList
            });
        });
    }

    _extractId(url) {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];
    }

    renderItems(arr, _extractId) {

        return arr.map(({url, name}) => {
            const id = this._extractId(url);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                {name}
            </li>
            )
        })
    }

    render() {

        const { pokemonList } = this.state;
        
        if (!pokemonList) {
            return <Spinner />
        }

        const items = this.renderItems(pokemonList);
        return (
            <ul className="item-list list-group">
               {items}
            </ul>
        );
    }
}