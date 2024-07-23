<script setup>
import { game } from '../assets/store.js'

import CardGrid from '../components/CardGridComp.vue'
import Game from '@/assets/Game';


const savedData = JSON.parse(sessionStorage.gameInfo)
const currentGame = new Game(savedData.gameTheme, savedData.gameMode, savedData.playerName)

game.value = currentGame
console.log(currentGame, game.value)
currentGame.launchGame()


</script>


<template>
    <h1>Placeholder</h1>
    <Suspense>
        <CardGrid />
    </Suspense>
</template>

<style scoped>

</style>