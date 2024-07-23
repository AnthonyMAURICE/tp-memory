import Level from './Level.js'

class MemoryLevel extends Level{
    constructor(_theme){
        super()
        this.theme = _theme
        this.currentLevel = 0
        this.timeOutNewLevel = 0
        this.timeInterval = null
        this.maxLevel = 6
    }

    calcTimeoutNewLevel(){
        this.timeOutNewLevel = this.currentLevel == 6 ? 1000 * 60 * 20 : 20000
    }
    
    getCards(){
        return this.cards
    }

}

export default MemoryLevel