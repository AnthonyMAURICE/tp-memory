<script setup>

import LevelResult from '../components/LevelResultComp.vue'
const props = defineProps(['currentGame'])

</script>


<template>
    <section v-if="!props.currentGame.level.checkIfLevelCleared()">
        <div v-for="elem in props.currentGame.level.playDeck">
            <img :data-id="elem.id" v-if="elem.isVisible" :src="`../src/assets/theme/${props.currentGame.theme}/${elem.name}`">
            <div :data-id="elem.id" class="card-invisible" @click="props.currentGame.level.clickEvent" v-else>Carte</div> 
        </div>
    </section>
    <section v-else>
        <level-result :currentGame="currentGame"/>
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
        cursor: pointer;
    }
    img, .card-invisible{
        border-radius: 10px;
        width: 150px;
        height: 150px;
        margin: 10px;
        border: 1px solid var(--color2);
    }

</style>