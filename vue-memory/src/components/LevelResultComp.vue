<script setup>
import { ref, onUnmounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'

const props = defineProps(['currentGame', 'timer'])
const emit = defineEmits(['stopTimer', 'resetTimer'])
const router = useRouter()
const nextLevelTimer = ref(Math.round(props.currentGame.level.calcTimeoutNewLevel()/1000))

let timerId = setInterval(() => {
    nextLevelTimer.value--
}, 1000);

onBeforeMount(()=> {
    if(props.currentGame.level.finished){
        router.push({ path: '/resultats' })
    }else{
        emit('stopTimer')
    }
    
})

function formatTime(){
    const minutes = Math.floor(nextLevelTimer.value / 60);
    const seconds = nextLevelTimer.value - minutes * 60;
    return minutes > 0 ? `${minutes} minutes et ${seconds} secondes` : `${seconds} secondes`
}

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
        <p>Prochain niveau dans : {{ formatTime() }}</p>
    </div>
</template>

<style scoped>

</style>