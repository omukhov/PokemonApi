export default class PokemonApiService {

    _apiBase = 'https://pokeapi.co/api/v2';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllPokemons() {
        const res = await this.getResource(`/pokemon/`);
        return res.results; 
    }

    getPokemon = async  (id) => {
        const pokemon = await this.getResource(`/pokemon/${id}`);
        return this._transformPokemon(pokemon);
    }

    getPokemonImage = ({name}) => {
        return `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
    };

    getShinyPokemonImage = ({name}) => {
        return `https://img.pokemondb.net/sprites/home/shiny/${name}.png`;
    };

    _transformPokemon(pokemon) {
        return {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types
        };
    }

}
