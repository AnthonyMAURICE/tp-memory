import CardContainer from "./CardContainer"
import JsonSave from "./JsonSave"
class Level{

    constructor(){
        this.currentLevel = 1
        this.turnCounter = 0
        this.clickCounter = 0
        this.levelTimer = 0
        this.paused = true
        this.score = 0
        this.finished = false
        this.cards = new CardContainer()
        this.idArray = []
        this.cardUnCovered = []
    }

    calcSuccessRate(){
        return Math.round(100-(this.turnCounter - this.calcBestPossibleScore()) / this.turnCounter*100)
    }

    calcBestPossibleScore(){
        return this.cards.playDeck.length / 2
    }

    // fonction qui gère les clicks sur les cartes
    clickEvent(_event){
        // card Array stocke les id de la carte à l'origine du click, pour chaque tour
        this.idArray.push(_event.target.dataset.id)
        // boucle forEach sur le deck entier
        this.cards.playDeck.forEach(elem => {
            // si id d'origine correspond à celui de l'objet carte
            if(_event.target.dataset.id == elem.id){
                // celle-ci devient visible
                elem.isVisible = true
                // et elle est "poussée" dans this.cardUncovered pour plus tard déterminer s'il y a paire ou non
                this.cardUnCovered.push(elem)
                this.clickCounter++
                elem.clickCounter++
            }
            // condition si le tour en est à sa deuxième phase
            if(this.clickCounter == 2){
                //appel de la fonction de seconde phase de tour, quand la seconde carte est découverte
                this.secondClick()
                //réinitialisation des tableaux pour un nouveau tour
                this.idArray = []
                this.cardUnCovered = []
            }
        })
    }

    // fonction gérant le second click, avec appel de la fonction checkant les égalités ou non
    secondClick(){
        // le nombre de tours est incrémenté
        this.turnCounter++
        // le compteur de clicks est réinitialisé
        this.clickCounter = 0
        // condition pour déterminer s'il n'y a pas paire
        if(!this.checkCards(this.idArray)){
            // boucle foreach sur le tableau de cartes retournées
            this.cardUnCovered.forEach(elem =>{
                setTimeout(() => {
                    // pas de paires, chaque élément redevient invisible après 1/2 seconde
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

    /**
     * 
     * @param {*} _maxLevel nombre de niveaux du mode de jeu
     */
    storeResults(_maxLevel){
        localStorage.nbeLevels = _maxLevel
        const save = new JsonSave(this.levelTimer, this.calcSuccessRate())
        localStorage.levelsSave = save.createSaveArray(save.save)
    }

    checkIfLevelCleared(){
        return this.score == this.cards.playDeck.length/2
    }

    //fonction de contrôle sur les id des cartes, pour vérifier s'il y a paire
    checkCards(_idArray){
        // le split() et le join() servent à pouvoir déterminer s'il y a égalité entre les deux valeurs (les "doubles" ayant un "s" accolé à leur id)
        return _idArray[0].split('s').join('') === _idArray[1].split('s').join('')
    }

}
export default Level