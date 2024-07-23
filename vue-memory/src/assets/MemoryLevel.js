import Level from './Level.js'
import result from "./fetchData.js"
import Card from "./Card.js"

class MemoryLevel extends Level{
    constructor(_theme){
        super()
        this.theme = _theme
        this.currentLevel = 0
        this.timeOutNewLevel = 0
        this.timeInterval = null
        this.maxLevel = 6
        this.playDeck = []
    }

    calcTimeoutNewLevel(){
        this.timeOutNewLevel = this.currentLevel == 6 ? 1000 * 60 * 20 : 20000
    }
    
    getCards(){
        return this.cards
    }

    constructBaseDecks(){
        result.forEach(element => {
            let card = new Card(element.id, element.name)
            this.cards.push(card)
        });
        this.shuffleArray(this.cards)
        this.secondDeck = this.cards
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

export default MemoryLevel