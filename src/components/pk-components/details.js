import React from "react";
import ItemDetails from "../item-details";
import PokemonApiService from "../../services/pokemon-api-service";

const pokemonApiService = new PokemonApiService();

const { getPokemonImage, getPokemon, getShinyPokemonImage } = pokemonApiService;

const PokemonDetails = ({itemId}) => {
     console.log(itemId);   
    return (
       <React.Fragment>
            <ItemDetails 
            pokemonId={itemId}
            getData={getPokemon}
            getImageUrl={getPokemonImage}/>;
       </React.Fragment>
    )
};

const ShinyPokemonDetails = ({itemId}) => {
    console.log(itemId);
    return (
       <React.Fragment>
            <ItemDetails 
            pokemonId={itemId}
            getData={getPokemon}
            getImageUrl={getShinyPokemonImage}/>;
       </React.Fragment>
    )
};

export  { PokemonDetails, ShinyPokemonDetails };