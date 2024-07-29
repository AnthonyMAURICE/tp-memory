import Level from './Level.js'

class MemoryLevel extends Level{

    constructor(){
        super()
        this.timeOutNewLevel = this.calcTimeoutNewLevel()
        this.timeInterval = null
        this.maxLevel = 6
        this.maxDeckSize = this.calcDeckSize()
    }

    calcDeckSize(){
        return 12
    }

    calcTimeoutNewLevel(){
        return this.currentLevel == 6 ? 1000 * 60 * 20 : 20000
    }

    relaunch(){
        if(this.checkIfLevelCleared()){
            setTimeout(() =>{
                this.cards.playDeck.forEach((elem) => elem.isVisible = false)
                this.turnCounter = 0
                this.currentLevel++
                this.score = 0
            }, this.calcTimeoutNewLevel())
        }
    }
}
export default MemoryLevel