import Level from './Level.js'
import result from "./fetchData.js"
import Card from "./Card.js"

class MemoryLevel extends Level{

    constructor(){
        super()
        this.timeOutNewLevel = this.calcTimeoutNewLevel()
        this.timeInterval = null
        this.maxLevel = 6
        this.maxDeckSize = 12
    }

    calcTimeoutNewLevel(){
        return this.currentLevel == 6 ? 1000 * 60 * 20 : 20000
    }

    // fonction de construction des decks de jeu
    constructBaseDeck(){
        // d'abord, les objets créés, d'après les éléments extraits du fichier json, sont intégrés à un tableau
        result.forEach(element => {
            let card = new Card(element.id, element.name)
            this.cards.push(card)
        });
        // celui-ci est mélangé une première fois
        this.shuffleArray(this.cards)
        // le premier deck est construit (this.playDeck)
        this.constructPlayDeck(this.playDeck)
        // le second aussi (this.secondDeck)
        this.constructSecondDeck()
        // qui est mélangé une seconde fois
        this.shuffleArray(this.playDeck)
    }

    // construction du premier deck à partir du tableau de cartes complet
    constructPlayDeck(_deck){
        for(let i = 0; i < this.maxDeckSize; i++){
            _deck.push(this.cards[i])
        }
    }

    // création de nouveaux objets cartes, avec un id commençant par 's' pour les différencier, et intégrés au tableau this.playDeck
    constructSecondDeck(){
        this.playDeck.forEach(elem=>{
            let secondCard = new Card(`s${elem.id}`, elem.name)
            this.playDeck.push(secondCard)
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

    relaunch(){
        if(this.checkIfLevelCleared()){
            setTimeout(() =>{
                this.playDeck.forEach((elem) => elem.isVisible = false)
                this.turnCounter = 0
                this.currentLevel++
                this.score = 0
                this.levelCleared = false
            }, this.calcTimeoutNewLevel())
            
        }
    }
}
export default MemoryLevel