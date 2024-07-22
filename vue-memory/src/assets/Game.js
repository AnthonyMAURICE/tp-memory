class Game{
    constructor(_chosenTheme, _chosenMode, _playerName){
        this.theme = _chosenTheme
        this.mode = _chosenMode
        this.startDateTime = Date.now()
        this.isFinished = false
        this.totalTime = 0
        this.succesRate = 0
    }


}