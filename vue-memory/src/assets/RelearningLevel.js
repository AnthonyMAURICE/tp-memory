import Level from "./Level"

class RelearningLevel extends Level{
    constructor(_theme){
        super()
        this.theme = _theme
        this.currentLevel = 0
        this.timeOutNewLevel = 20000
        this.timeInterval = null
        this.maxLevel = 6
    }


}

export default RelearningLevel