import React from "react";
import { PokemonApiServiceConsumer } from "../pokeapi-service-context";

const withpokeapiservice = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <PokemonApiServiceConsumer>
                {
                    (pokemonApiService) => {
                        const serviceProps = mapMethodsToProps(pokemonApiService);
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </PokemonApiServiceConsumer>
        )
    }
}

export default withpokeapiservice;