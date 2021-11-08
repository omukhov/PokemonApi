import React from 'react';
import { withRouter } from 'react-router';
import { PokemonList, ShinyPokemonDetails } from "../pk-components";


const PokemonPage = ({history, match}) => {

    const { id } = match.params;
    return (
        <div className="row mb2">
            <div className="col-md-6">
                <PokemonList 
                    onItemSelected={(id) => history.push(id)}
                    />
            </div> 
            <div className="col-md-6">
                <ShinyPokemonDetails 
                    itemId={id}/>
            </div>
        </div>
    );
};

export default withRouter(PokemonPage);