import Level from './Level.js'

class MemoryLevel extends Level{

    constructor(){
        super()
        this.timeOutNewLevel = this.calcTimeoutNewLevel()
        this.timeInterval = null
        this.maxLevel = 6
        this.maxDeckSize = 12
    }

    calcDeckSize(){
        return this.maxDeckSize
    }

    calcTimeoutNewLevel(){
        return this.currentLevel == 6 ? 1000 * 60 * 20 : 20000
    }


}
export default MemoryLevel