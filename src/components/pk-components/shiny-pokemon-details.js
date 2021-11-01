import React from "react";
import ItemDetails from "../item-details";
import {withpokeapiservice} from '../hoc-helpers';

const ShinyPokemonDetails = (props) => {
     return (
         <React.Fragment>
               <ItemDetails {...props}/>
         </React.Fragment>
       )
};

const mapMethodsToProps = (pokemonApiService) => {
     return {
          getData: pokemonApiService.getPokemon,
          getImageUrl: pokemonApiService.getShinyPokemonImage
     }
}

export  default withpokeapiservice(ShinyPokemonDetails, mapMethodsToProps);