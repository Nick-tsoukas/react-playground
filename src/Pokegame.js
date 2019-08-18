import React, { Component } from 'react';
import Pokedex from './Pokedex';
import pokemons from  './pokemons';

// shuffles the pokemon cards
function shuffle(cards){
    let shuffle = [];
    while (shuffle.length < 8){
        // gets a random card ... 0-8
        let card = cards[Math.floor(Math.random() * 8)];
        if(shuffle.indexOf(card) === -1) {
            shuffle.push(card);
        }
    }
    return shuffle;
}

const pokecards  = shuffle(pokemons);

function buildDecks(shuffledCards){
    let decks = [];
    decks.push(shuffledCards.slice(0,4));
    decks.push(shuffledCards.slice(4,8));
    return decks;
}

function getExp(deck){
    return deck.map((card) => {
        return card.base_experience;
    }).reduce((exp, current) => {
        return exp + current;
    });
}
const decks = buildDecks(pokecards);

class Pokegame extends Component {
    render(){
        return(
            <div>
               {decks.map((deck,index) => {
                   return(
                    <div key={index}>
                       <h1>Deck {index + 1} Total: {getExp(deck)}</h1>
                       <Pokedex total={getExp(deck)} cards={deck}/>
                   </div>
                   )
               })}
            </div>
        )
    }
}

export default Pokegame


