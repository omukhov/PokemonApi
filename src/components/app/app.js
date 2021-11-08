import React, { Component } from 'react';
import Header from '../header';
import { PokemonPage, ShinyPokemonPage, LoginPage, SecretPage } from '../pages';
import { PokemonApiServiceProvider } from '../pokeapi-service-context';
import RandomPokemon from '../random-pokemon';

import './app.css';
import PokemonApiService from '../../services/pokemon-api-service';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { PokemonDetails } from '../pk-components';

export default class App extends Component {

    state = {
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    pokemonApiService = new PokemonApiService();

    render() {

        const  { isLoggedIn } = this.state;
        return (
            <PokemonApiServiceProvider value={this.pokemonApiService}>
                <Router>
                    <div className="stardb-app container">
                        <Header />
                        <RandomPokemon />
                        <Route path="/" 
                                render={() => <h2>Welcome to PokemonDB</h2>} 
                                exact/>
                        <Route path="/pokemon" exact component={PokemonPage} />
                        <Route path="/shiny/:id?" component={ShinyPokemonPage} />
                        <Route path="/pokemon/:id" 
                                render={({match}) => {
                                    const { id } = match.params;
                                    return <PokemonDetails  itemId={id}/>
                                }} />
                        <Route path="/login"  
                                render={() => (
                                    <LoginPage 
                                        isLoggedIn={isLoggedIn} 
                                        onLogin={this.onLogin} 
                                    />
                                )}/>
                        <Route path="/secret" 
                                render={() => (
                                    <SecretPage isLoggedIn={isLoggedIn} />
                                )}/>
                    </div>  
                </Router>
            </PokemonApiServiceProvider>
        );
    }
};