class Level{
    constructor(_theme){
        this.theme = _theme
        this.currentLevel = 0
        this.turnCounter = 0
        this.clickCounter = 0
        this.levelTimer = 0
        this.score = 0
        this.cards = []
        this.playDeck = []
        this.cardArray = []
        this.cardUnCovered = []
    }

    calcSuccessRate(){
        return 100-(this.turnCounter - this.calcBestPossibleScore()) / this.turnCounter*100
    }

    calcBestPossibleScore(){
        return this.cards.length
    }

    // fonction qui gère le click sur les cartes
    clickedImg(_event){
        // card Array stocke les id de la carte à l'origine du click, pour chaque tour
        this.cardArray.push(_event.target.dataset.id)
        // boucle forEach sur le deck entier
        this.playDeck.forEach(elem => {
            // si id d'origine correspond à celui de l'objet carte
            if(_event.target.dataset.id == elem.id){
                // celle-ci devient visible
                elem.isVisible = true
                // et elle est "poussée" dans this.cardUncovered pour plus tard déterminer s'il y a paire ou non
                this.cardUnCovered.push(elem)
                this.clickCounter++
            }
            // condition si le tour en est à sa deuxième phase
            if(this.clickCounter == 2){
                //appel de la fonction de seconde phase de tour, quand la seconde carte est découverte
                this.turnSecondPhase()
                //réinitialisation des tableaux pour un nouveau tour
                this.cardArray = []
                this.cardUnCovered = []
            }
        })
    }

    turnSecondPhase(){
        // le nombre de tours est incrémenté
        this.turnCounter++
        // le compteur de clicks est réinitialisé
        this.clickCounter = 0
        // condition pour déterminer s'il n'y a pas paire
        if(!this.checkCards(this.cardArray)){
            // boucle foreach sur le tableau de cartes retournées
            this.cardUnCovered.forEach(elem =>{
                setTimeout(() => {
                    // pas de paires, chaque élément redevient invisible après une demie seconde
                    elem.isVisible = false;
                }, 500);
            })
        }else{
            // si paire il y a, le score est incrémenté
            this.score++
        }
        if(this.checkIfLevelCleared()){
            this.relaunch()
        }
    }

    checkIfLevelCleared(){
        let test = this.score == this.playDeck.length/2
        return test
    }

    //fonction de contrôle sur les id des cartes, pour vérifier s'il y a paire
    checkCards(_cardArray){
        // le split() et le join() servent à pouvoir déterminer s'il y a égalité entre les deux valeurs (le second deck ayant un "s" accolé à son id)
        let first = _cardArray[0].split('s').join('')
        let second = _cardArray[1].split('s').join('')
        return first == second
    }

}
export default Level