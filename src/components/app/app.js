import React from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PokemonDetails from '../pokemon-details';
import RandomPokemon from '../random-pokemon';

import './app.css';

const App = () => {
    return (
        <>
            <Header />
            <RandomPokemon />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PokemonDetails />
                </div>
            </div>
        </>
    );
};

export default App;