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
        // d'abord, les objets créés d'après les éléments extraits du fichier json sont intégrés à un tableau
        result.forEach(element => {
            this.cards.globalContainer.push(new Card(element.id, element.name))
        });
        // celui-ci est mélangé une première fois
        this.cards.shuffleArray(this.cards.globalContainer)
        // le premier deck est construit (this.playDeck)
        this.constructPlayDeck(this.cards.playDeck)
        // le second aussi
        this.constructSecondDeck()
        // qui est mélangé une seconde fois
        this.cards.shuffleArray(this.cards.playDeck)
    }

    // construction du premier deck à partir du tableau de cartes complet 
    constructPlayDeck(_deck){
        for(let i = 0; i < this.maxDeckSize; i++){
            _deck.push(this.cards.globalContainer[i])
        }
    }

    // création de nouveaux objets cartes à partir de ceux de this.playDeck, avec un id commençant par 's' pour les différencier, et intégrés à ce même tableau
    constructSecondDeck(){
        this.cards.playDeck.forEach(elem=>{
            this.cards.playDeck.push(new Card(`s${elem.id}`, elem.name))
        })
    }

    relaunch(){
        if(this.checkIfLevelCleared()){
            setTimeout(() =>{
                this.cards.playDeck.forEach((elem) => elem.isVisible = false)
                this.turnCounter = 0
                this.currentLevel++
                this.score = 0
                this.levelCleared = false
            }, this.calcTimeoutNewLevel())
            
        }
    }
}
export default MemoryLevel