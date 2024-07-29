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
        <div @click="emitUnpause(props.currentGame.level)" v-for="elem in props.currentGame.level.cards.playDeck">
            <card-comp v-if="elem.isVisible" :current-game="currentGame" :card="elem"/>
            <div v-else :data-id="elem.id" :class="[props.currentGame.level.maxDeckSize >= 12 ? 'small-cards' : 'big-cards']" @click="props.currentGame.level.clickEvent">Carte</div> 
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
    .small-cards{
        border-radius: 10px;
        width: 125px;
        height: 125px;
        margin: 10px;
        border: 1px solid var(--color2);
    }

    .big-cards{
        border-radius: 10px;
        margin: 10px;
        border: 1px solid var(--color2);
        width: 150px;
        height: 150px;
    }

</style>