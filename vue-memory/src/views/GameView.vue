<script setup>
import { onBeforeMount } from 'vue';
import { game } from '../assets/store.js'
import CardGrid from '../components/CardGridComp.vue'
import Game from '@/assets/Game.js';

const savedData = JSON.parse(sessionStorage.gameInfo)
const currentGame = new Game(savedData.gameTheme, savedData.gameMode, savedData.playerName)

onBeforeMount(() => {
    game.value = currentGame
    currentGame.launchGame()
})

</script>


<template>
    <div>
        <p>{{ savedData.playerName }} | Mode : {{ game.value.modeDefinition() }}</p>
        <p>Niveau : {{ game.value.level.currentLevel }} | Tours de jeu : {{ game.value.level.turnCounter }} | Score de ce niveau : {{ game.value.level.score }}</p>
    </div>
    <CardGrid />
</template>

<style scoped>
div{
    margin: 15px;
}
</style>