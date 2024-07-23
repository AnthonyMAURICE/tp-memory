<script setup>
import { game } from '../assets/store.js'
    
</script>


<template>
    <section>
        <div v-for="elem in game.value.level.playDeck">
            <img :data-id="elem.id" v-if="elem.isVisible" :src="`../src/assets/theme/${game.value.theme}/${elem.name}`">
            <div :data-id="elem.id" class="card-invisible" @click="game.value.level.clickedImg" v-else>Carte</div> 
        </div>
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
    img, .card-invisible{
        width: 150px;
        height: 150px;
        margin: 10px;
        border: 1px solid var(--color2);
    }

</style>