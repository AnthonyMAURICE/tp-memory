
export default class CardContainer{
    constructor(){
        this.globalContainer = []
        this.playDeck = []
    }

    // fonction de mélange des tableaux
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

}