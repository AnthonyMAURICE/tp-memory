class Card{
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

export default Card