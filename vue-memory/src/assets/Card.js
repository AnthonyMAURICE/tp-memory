class Card{
    constructor(_id, _src){
        this.id = _id
        this.src = _src
        this.clickCounter = 0
        this.isVisible = false
    }

    clickOnCard(){
        console.log(this)
    }
}

export default Card