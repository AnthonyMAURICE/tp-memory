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
        this.storeResults(this.maxLevel)
        if(this.checkIfLevelCleared() && this.currentLevel < this.maxLevel){
            setTimeout(() =>{
                this.cards.playDeck.forEach((elem) => {
                    elem.clickCounter = 0
                    elem.isVisible = false})
                this.turnCounter = 0
                this.currentLevel++
                this.score = 0
            }, this.calcTimeoutNewLevel())
        }else{
            this.finished = true
        }
    }
}
export default MemoryLevel