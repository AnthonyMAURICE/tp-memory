<script setup>
import { onBeforeMount, onMounted } from 'vue';
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
    <h1>Placeholder</h1>
    <CardGrid />
</template>

<style scoped>

</style>