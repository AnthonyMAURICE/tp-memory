export default class Results{
    /**
     * @param {string} _name nom du joueur
     * @param {*} _date date de début de partie
     * @param {*} _totalTime temps total
     * @param {*} _successRate taux de succès total
     */

    constructor(_name, _date, _totalTime, _successRate){
        this.finalResults = {
            name: _name,
            date: _date,
            totalTime : _totalTime,
            successRate: _successRate
        }

    }


}