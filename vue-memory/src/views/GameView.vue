<script setup>
import { onBeforeMount, ref } from 'vue';
import CardGrid from '../components/CardGridComp.vue'
import Game from '@/assets/Game.js';

const savedData = JSON.parse(sessionStorage.gameInfo)
const currentGame = ref(new Game(savedData.gameTheme, savedData.gameMode, savedData.playerName))

onBeforeMount(() => {
    currentGame.value.launchGame()
})



</script>


<template>
    <div>
        <p>{{ savedData.playerName }} | Mode : {{ currentGame.modeDefinition() }} | Score de ce niveau : {{ currentGame.level.score }}</p>
        <p>Niveau : {{ currentGame.level.currentLevel }}</p>
    </div>
    <card-grid :currentGame="currentGame" />
</template>

<style scoped>
div{
    margin: 15px;
}
</style>