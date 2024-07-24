<script setup>
import { ref } from 'vue';
import { game } from '../assets/store.js'


const timerStart = ref(game.value.level.calcTimeoutNewLevel())
let interval = null
if(game.value.level.checkIfLevelCleared()){
    interval = setInterval(timerStart.value -= 0.1, 100)
}else{
    clearInterval(interval)
}


</script>


<template>
    <section v-if="!game.value.level.checkIfLevelCleared()">
        <div v-for="elem in game.value.level.playDeck">
            <img :data-id="elem.id" v-if="elem.isVisible" :src="`../src/assets/theme/${game.value.theme}/${elem.name}`">
            <div :data-id="elem.id" class="card-invisible" @click="game.value.level.clickedImg" v-else>Carte</div> 
        </div>
    </section>
    <section v-else>
        <p>Tours de jeu : {{ game.value.level.turnCounter }} | Meilleur score possible : {{ game.value.level.calcBestPossibleScore() }} | Score de ce niveau : {{ game.value.level.score }}</p>
        <p>{{ timerStart }}</p>
    </section>
</template>

<style scoped>
    section{
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        margin: auto;
        justify-content: center;
        align-items: center;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    img, .card-invisible{
        border-radius: 10px;
        width: 150px;
        height: 150px;
        margin: 10px;
        border: 1px solid var(--color2);
    }

</style>