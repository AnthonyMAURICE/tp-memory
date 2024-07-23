class Level{
    constructor(_theme){
        this.theme = _theme
        this.turnCounter = 0
        this.levelTimer = 0
        this.bestPossibleScore = 0
        this.score = 0
        this.successRate = 0
        this.cards = []
    }

    calcSuccessRate(){
        this.successRate = 100-(this.turnCounter - this.bestPossibleScore) / this.turnCounter*100
    }

    calcBestPossibleScore(){
        this.bestPossibleScore = this.cards.length
    }

    generateNewLevel(){
        // this.cards = result
        console.log(this.cards)
    }
    

}

export default Level