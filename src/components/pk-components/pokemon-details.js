import React from "react";
import ItemDetails from "../item-details";
import {withpokeapiservice} from '../hoc-helpers';

const PokemonDetails = (props) => { 

    return (
          <React.Fragment>
               <ItemDetails {...props} />
          </React.Fragment>
    )
};

const mapMethodsToProps = (pokemonApiService) => {
    return {
        getData: pokemonApiService.getPokemon,
        getImageUrl: pokemonApiService.getPokemonImage,
    }
}

export default withpokeapiservice(PokemonDetails, mapMethodsToProps);