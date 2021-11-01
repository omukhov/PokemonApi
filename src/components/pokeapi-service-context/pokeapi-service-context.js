import React from 'react';

const { 
    Provider: PokemonApiServiceProvider, 
    Consumer: PokemonApiServiceConsumer
} = React.createContext();

export {
    PokemonApiServiceProvider,
    PokemonApiServiceConsumer
};