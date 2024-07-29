<script setup>
import { ref, onUnmounted, onBeforeMount } from 'vue';

const props = defineProps(['currentGame', 'timer'])
const emit = defineEmits(['stopTimer', 'resetTimer'])

const nextLevelTimer = ref(Math.round(props.currentGame.level.calcTimeoutNewLevel()/1000))

let timerId = setInterval(() => {
    nextLevelTimer.value--
}, 1000);

onBeforeMount(()=> {
    emit('stopTimer')
})

onUnmounted(() => {
    clearInterval(timerId);
    emit('resetTimer')
});

</script>


<template>
    <div>
        <p>
            Tours de jeu : {{ props.currentGame.level.turnCounter }} | 
            Meilleur score possible : {{ props.currentGame.level.calcBestPossibleScore() }} | 
            Taux de réussite : {{ props.currentGame.level.calcSuccessRate() }}% |
            Temps passé : {{ props.timer }}
        </p>
    </div>
    <div>
        <p>Prochain niveau dans : {{ nextLevelTimer }}</p>
    </div>
</template>

<style scoped>

</style>