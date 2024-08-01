import Level from './Level.js'

export default class MemoryLevel extends Level{

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
        return this.currentLevel == 2 ? 1000 * 60 * 20 : 2000
    }

    relaunch(){
        this.storeResults(this.maxLevel)
        if(this.checkIfLevelCleared() && this.currentLevel < this.maxLevel){
            setTimeout(() =>{
                this.newLevel()
            }, this.calcTimeoutNewLevel())
        }else{
            this.finished = true
        }
    }
}
