import MemoryLevel from "./MemoryLevel.js"
import RelearningLevel from "./RelearningLevel.js"
import { game } from '../assets/store.js'



class Game{

    /**
     * 
     * @param {String} _chosenTheme  thème pour les cartes
     * @param {String} _chosenMode   mode de jeu choisi
     * @param {String} _playerName   nom du joueur
     */

    constructor(_chosenTheme, _chosenMode, _playerName){
        this.theme = _chosenTheme
        this.mode = _chosenMode
        this.playerName = _playerName
        this.startDateTime = Date.now()
        this.isFinished = false
        this.totalTime = 0
        this.succesRate = 0
        this.level = null
    }

    // fonction qui créé un nouveau niveau, selon le choix de l'utilisateur, puis appele la fonction de création du deck de cartes
    launchGame(){
        if(!this.isFinished){
            this.level = this.mode == 'memory' ? new MemoryLevel(this.theme) : new RelearningLevel(this.theme)
            this.level.currentLevel++
            game.value.level = this.level
            this.level.constructBaseDeck()
        }else{ 
            console.log('Terminé')
        }
    }

    // fonction qui retourne le mode choisi, pour l'afficher sur l'interface utilisateur
    modeDefinition(){
        let definition = ''
        switch(this.mode){
            case 'memory':
                definition ='Test de mémoire'
                break;
            case 'relearning':
                definition = 'Réapprentissage'
                break;
            default:
                definition = 'Something went wrong'
                break;
        }
        return definition
    }

    downloadResults(){
        console.log('placeholder')
    }

}

export default Game