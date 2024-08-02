export default class Format{
    constructor(){
        this.resultArray = this.getStorageElem()
    }

    getStorageElem(){
        return JSON.parse(localStorage.levelsSave)
    }
    
    formatTime(finalTime, _final){
        if(_final){
            this.resultArray.forEach(elem => finalTime += elem.time)
        }
        const minutes = Math.floor(finalTime / 60);
        const seconds = finalTime - minutes * 60;
        return minutes > 0 ? `${minutes} minute(s) et ${seconds} seconde(s)` : `${seconds} seconde(s)`
    }
    
    formatSuccess(finalSuccesses){
        this.resultArray.forEach(elem => finalSuccesses += elem.success)
        return (finalSuccesses/parseInt(localStorage.getItem('nbeLevels')))
    }
}