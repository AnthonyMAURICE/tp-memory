import MemoryLevel from "./MemoryLevel.js"
import RelearningLevel from "./RelearningLevel.js"
import { game } from '../assets/store.js'

class Game{
    constructor(_chosenTheme, _chosenMode, _playerName){
        this.theme = _chosenTheme
        this.mode = _chosenMode
        this.playerName = _playerName
        this.startDateTime = Date.now()
        this.isFinished = false
        this.totalTime = 0
        this.succesRate = 0
        this.level = null
    }

    launchGame(){
        if(!this.isFinished){
            this.level = this.mode == 'memory' ? new MemoryLevel(this.theme) : new RelearningLevel(this.theme)
            this.level.currentLevel++
            game.value.level = this.level
            this.level.constructBaseDecks()
            console.log(this)
        }else{ 
            console.log('Terminé')
        }
    }

    downloadResults(){
        console.log('placeholder')
    }

}

export default Game