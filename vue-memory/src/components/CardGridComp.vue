<script setup>
import CardComp from './CardComp.vue';
const emit = defineEmits(['levelTimer', 'levelFinished'])
const props = defineProps(['currentGame', 'timer'])

function emitUnpause(_level){
    if(_level.paused){
        emit('levelTimer')
    }
}

</script>


<template>
    <section :class="[props.currentGame.level.maxDeckSize > 20 ? 'big-section' : 'small-section']">
        <div @click="emitUnpause(props.currentGame.level)" class="card" v-for="card in props.currentGame.level.cards.playDeck">
            <card-comp v-if="card.isVisible" class="card__face card__face--front"  :current-game="currentGame" :card="card"/>
            <div v-else :data-id="card.id" :class="[props.currentGame.level.calcDeckSize() >= 16 ? 'card__face card__face--back covered small-cards' : 'card__face card__face--back covered big-cards']" @click="props.currentGame.level.clickEvent"><p :data-id="card.id"></p></div> 
        </div>
    </section>
    
</template>

<style scoped>
    section{
        display: flex;
        flex-flow: row wrap;
        margin: auto;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 80vh;
    }
    .small-section{
        max-width: 80%;
    }

    .big-section{
        max-width: 100%;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    p{
        width: 20%;
        height: 30%;
        background-color: black;
        border-radius: 25px;
    }

</style>