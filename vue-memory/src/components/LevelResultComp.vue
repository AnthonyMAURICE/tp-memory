<script setup>
import { ref, onUnmounted } from 'vue';
import { game } from '../assets/store.js'

const timer = ref(Math.round(game.value.level.calcTimeoutNewLevel()/1000))

let timerId = setInterval(() => {
    timer.value -= 1
}, 1000);

onUnmounted(() => {
    clearInterval(timerId);
});

</script>


<template>
    <p>Tours de jeu : {{ game.value.level.turnCounter }} | Meilleur score possible : {{ game.value.level.calcBestPossibleScore() }} | Score de ce niveau : {{ game.value.level.calcSuccessRate() }}%</p>
    <p> | Prochain niveau dans : {{ timer }}</p>
</template>

<style scoped>

</style>