class Level{
    constructor(_theme){
        this.theme = _theme
        this.turnCounter = 0
        this.levelTimer = 0
        this.bestPossibleScore = 0
        this.score = 0
        this.successRate = 0
        this.cards = []
        this.playDeck = []
        this.levelCleared = false
    }

    calcSuccessRate(){
        this.successRate = 100-(this.turnCounter - this.bestPossibleScore) / this.turnCounter*100
    }

    calcBestPossibleScore(){
        this.bestPossibleScore = this.cards.length
    }

    clickedImg(_event){ //reste à isoler la carte sélectionnée
        this.playDeck.forEach(elem => {
            elem.isVisible = _event.target.dataset.id == elem.id ? true : false
        })
        console.log(_event.target.dataset.id)
    }
}

export default Level