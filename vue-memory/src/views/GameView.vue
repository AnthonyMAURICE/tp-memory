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
    <p>{{ savedData.playerName }}</p>
    <p>Tours de jeu : {{ game.value.level.turnCounter }} | Score : {{ game.value.level.score }}</p>
    <CardGrid />
</template>

<style scoped>

</style>