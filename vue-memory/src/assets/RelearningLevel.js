import Level from "./Level"

export default class RelearningLevel extends Level{
    constructor(){
        super()
        this.timeOutNewLevel = this.calcTimeoutNewLevel()
        this.timeInterval = null
        this.maxLevel = 7
        this.maxDeckSize = this.calcDeckSize()
    }
    
    calcTimeoutNewLevel(){
        return 20000
    }

    calcDeckSize() {
        let size = 0
        switch(this.currentLevel){
            case 1:
                size = 2
                break
            case 2:
                size = 4
                break
            case 3:
                size = 8
                break
            case 4:
                size = 12
                break
            case 5:
                size = 16
                break
            case 6:
                size = 20
                break
            case 7:
                size = 28
                break
            default:
                console.log('something went wrong')
                break
        }
        return size
    }

    relaunch(){
        this.storeResults(this.maxLevel)
        if(this.checkIfLevelCleared() && this.currentLevel < this.maxLevel){
            setTimeout(() =>{
                this.cards.playDeck.forEach((elem) => elem.isVisible = false)
                this.turnCounter = 0
                this.currentLevel++
                this.score = 0
                this.cards.globalContainer = []
                this.cards.constructBaseDeck(this.calcDeckSize())
            }, this.calcTimeoutNewLevel())
        }else{
            this.finished = true
        }
    }
}
