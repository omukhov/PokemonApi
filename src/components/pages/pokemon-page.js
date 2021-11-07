import React from 'react';
import { PokemonList } from "../pk-components";
import { withRouter } from 'react-router-dom';

const PokemonPage = ({ history }) => {

    return (
        <React.Fragment>
            <PokemonList 
                onItemSelected={(Id) => {
                    history.push(Id);
            }} />
        </React.Fragment>
    );
};

export default withRouter(PokemonPage);