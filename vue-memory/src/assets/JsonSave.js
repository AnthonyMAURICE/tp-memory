export default class JsonSave{
    /**
     * 
     * @param {*} _time temps du niveau
     * @param {*} _success taux de succès du niveau
     */

    constructor(_time, _success){
        this.save = {
            time: _time,
            success: _success
        }
    }

    /**
     * 
     * @param {*} _save sauvegarde des stats du niveau
     * @returns retourne son traitement pour stockage dans le localstorage
     */

    createSaveArray(_save){
        let saveArray = []
        if(localStorage.levelsSave != undefined){
            let temp = JSON.parse(localStorage.levelsSave)
            for(let elem of temp){
                saveArray.push(elem)
            }
            localStorage.removeItem('levelsSave')
        }
        saveArray.push(_save)
        return JSON.stringify(saveArray)
    }
}