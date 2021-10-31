import React from "react";
import ItemList from "../item-list";
import WithData from "../hoc-helpers"; 
import PokemonApiService from "../../services/pokemon-api-service";

const pokemonApiService = new PokemonApiService(); 

const { getAllPokemons } = pokemonApiService;

const PokemonList = WithData(ItemList, getAllPokemons);

export { PokemonList };