import Card from "./Card";
import result from "./fetchData.js"

export default class CardContainer{
    constructor(){
        this.globalContainer = []
        this.playDeck = []
    }

    // fonction de construction des decks de jeu
    constructBaseDeck(_deckSize){
        // réinitialisation du deck de jeu
        this.playDeck = []
        // les objets créés d'après les éléments extraits du fichier json sont intégrés à un tableau
        result.forEach(element => {
            this.globalContainer.push(new Card(element.id, element.name))
        });
        // celui-ci est mélangé une première fois
        this.shuffleArray(this.globalContainer)
        // le premier deck est construit (this.playDeck)
        this.constructPlayDeck(this.playDeck, _deckSize)
        // le second aussi
        this.constructSecondDeck()
        // qui est mélangé une seconde fois
        this.shuffleArray(this.playDeck)
    }

    // construction du premier deck à partir du tableau de cartes complet 
    constructPlayDeck(_deck, _size){
        for(let i = 0; i < _size; i++){
            _deck.push(this.globalContainer[i])
        }
    }
    // création de nouveaux objets cartes à partir de ceux de this.playDeck, avec un id commençant par 's' pour les différencier, et intégrés à ce même tableau
    constructSecondDeck(){
        this.playDeck.forEach(elem=>{
            this.playDeck.push(new Card(`s${elem.id}`, elem.name))
        })
    }

    // fonction de mélange des tableaux
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

}