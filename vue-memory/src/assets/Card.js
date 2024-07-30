export default class Card{

    /**
     * 
     * @param {Int} _id         identifiant de la carte
     * @param {String} _name    nom de la carte
     */
    constructor(_id, _name){
        this.id = _id
        this.name = _name
        this.clickCounter = 0
        this.isVisible = false
    }

    clickOnCard(){
        this.clickCounter++
    }
}
