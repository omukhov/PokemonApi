import ItemList from "../item-list";
import { WithData, withpokeapiservice } from "../hoc-helpers"; 

const mapPokemonMethodsToProps = (pokemonApiService) => {
    return {
        getData: pokemonApiService.getAllPokemons
    };
};

const PokemonList = withpokeapiservice(WithData(ItemList), 
                                    mapPokemonMethodsToProps);

export { PokemonList };