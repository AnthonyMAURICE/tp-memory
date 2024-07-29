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
const timer = ref(0)

function inGameTimer(){
    if(currentGame.value.level.paused){
        currentGame.value.level.paused = false
        stateOfGame.value = 'Pause'
        levelTimer.value = setInterval(function(){timer.value++}, 1000)
    }else{
        stopTimer()
    }
}

function stopTimer(){
    currentGame.value.level.paused = true
    stateOfGame.value = 'Reprendre'
    if(currentGame.value.level.checkIfLevelCleared()){
        currentGame.value.successRates.push(currentGame.value.level.calcSuccessRate())
    }
    clearInterval(levelTimer.value)
}

function resetTimer(){
    clearInterval(levelTimer.value)
    if(currentGame.value.level.checkIfLevelCleared()){
        currentGame.value.timesArray.push(timer.value)
    }
    timer.value = 0
}

function resetGame(){
    resetTimer()
    currentGame.value.launchGame()
}
</script>

<template>
    <div v-if="!currentGame.level.checkIfLevelCleared()">
        <div class="stats">
            <p>Nom : {{ savedData.playerName }} | Mode : {{ currentGame.modeDefinition() }} | Score de ce niveau : {{ currentGame.level.score }}</p>
            <p>Niveau : {{ currentGame.level.currentLevel }}</p>
            <p>Timer : {{ timer }}</p>
            <timer-button-comp :state="stateOfGame" @timer-event="inGameTimer"/>
            <reset-button @reset-event="resetGame"/>
        </div>
        <div >
            <card-grid :timer="timer" :currentGame="currentGame" @level-timer="inGameTimer"/>
        </div>
    </div>
    <div v-else>
        <level-result @stop-timer="stopTimer" @reset-timer="resetTimer" :timer="timer" :currentGame="currentGame"/>
    </div>
</template>

<style scoped>
.stats{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15px;
}

p{
    margin: 0 25px;
}
</style>