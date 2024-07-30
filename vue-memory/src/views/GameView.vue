<script setup>
import { onBeforeMount, ref } from 'vue';
import CardGrid from '../components/CardGridComp.vue'
import LevelResult from '../components/LevelResultComp.vue'
import Game from '@/assets/Game.js';
import TimerButtonComp from '@/components/TimerButtonComp.vue';
import ResetButton from '@/components/ResetButtonComp.vue';

const savedData = JSON.parse(sessionStorage.gameInfo)
const currentGame = ref(new Game(savedData.gameTheme, savedData.gameMode, savedData.playerName))

onBeforeMount(() => {
    currentGame.value.launchGame()
})

const stateOfGame = ref('Commencer')
const levelTimer = ref(null)

function inGameTimer(){
    if(currentGame.value.level.paused){
        currentGame.value.level.paused = false
        stateOfGame.value = 'Pause'
        levelTimer.value = setInterval(function(){currentGame.value.level.levelTimer++}, 1000)
    }else{
        stopTimer()
    }
}

function stopTimer(){
    currentGame.value.level.paused = true
    stateOfGame.value = 'Reprendre'
    clearInterval(levelTimer.value)
}

function resetTimer(){
    clearInterval(levelTimer.value)
    currentGame.value.level.levelTimer = 0
}

function resetGame(){
    resetTimer()
    localStorage.clear()
    stateOfGame.value = 'Commencer'
    currentGame.value.timesArray = []
    currentGame.successRates = []
    currentGame.value.launchGame()
}
</script>

<template>
    <div v-if="!currentGame.level.checkIfLevelCleared()">
        <div class="stats">
            <p>Nom : {{ savedData.playerName }} | Mode : {{ currentGame.modeDefinition() }} | Score de ce niveau : {{ currentGame.level.score }}</p>
            <p>Niveau : {{ currentGame.level.currentLevel }}</p>
            <p>Timer : {{ currentGame.level.levelTimer }}</p>
            <timer-button-comp :state="stateOfGame" @timer-event="inGameTimer"/>
            <reset-button @reset-event="resetGame"/>
        </div>
        <div >
            <card-grid :timer="currentGame.level.levelTimer" :currentGame="currentGame" @level-timer="inGameTimer"/>
        </div>
    </div>
    <div v-else>
        <level-result @stop-timer="stopTimer" @reset-timer="resetTimer" :timer="currentGame.level.levelTimer" :currentGame="currentGame"/>
    </div>
</template>

<style scoped>
.stats{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
}

p{
    margin: 0 25px;
}
</style>