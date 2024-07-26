<script setup>
import { ref, onUnmounted } from 'vue';

const props = defineProps(['currentGame'])

const timer = ref(Math.round(props.currentGame.level.calcTimeoutNewLevel()/1000))

let timerId = setInterval(() => {
    timer.value -= 1
}, 1000);

onUnmounted(() => {
    clearInterval(timerId);
});

</script>


<template>
    <p>
        Tours de jeu : {{ props.currentGame.level.turnCounter }} | 
        Meilleur score possible : {{ props.currentGame.level.calcBestPossibleScore() }} | 
        Taux de réussite : {{ props.currentGame.level.calcSuccessRate() }}%
    </p>
    <p> | Prochain niveau dans : {{ timer }}</p>
</template>

<style scoped>

</style>