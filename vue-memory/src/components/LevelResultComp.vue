<script setup>
import { ref, onUnmounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'
import Format from '@/assets/Format';

const props = defineProps(['currentGame', 'timer'])
const emit = defineEmits(['stopTimer', 'resetTimer'])
const router = useRouter()
const nextLevelTimer = ref(Math.round(props.currentGame.level.calcTimeoutNewLevel()/1000))
const results = new Format()

let timerId = setInterval(() => {
    nextLevelTimer.value--
}, 1000);

onBeforeMount(()=> {
    if(props.currentGame.level.finished){
        router.push({ path: '/resultats' })
    }
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
            Temps passé : {{ props.timer }} |
            Prochain niveau dans : <span :style="{color: nextLevelTimer < 10 ? 'red': 'var(--color2)'}">{{ results.formatTime(nextLevelTimer, false) }}</span>
        </p>
    </div>
</template>

<style scoped>
p{
    text-align: center;
}
</style>