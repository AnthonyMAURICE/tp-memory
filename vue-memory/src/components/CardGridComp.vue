<script setup>

const emit = defineEmits(['levelTimer', 'levelFinished'])
const props = defineProps(['currentGame', 'timer'])
const urlFirstPart = '../src/assets/theme'

function emitUnpause(_level){
    if(_level.paused){
        emit('levelTimer')
    }
}

</script>


<template>
    <section>
        <div @click="emitUnpause(props.currentGame.level)" v-for="elem in props.currentGame.level.cards.playDeck">
            <img :data-id="elem.id" v-if="elem.isVisible" :src="`${urlFirstPart}/${props.currentGame.theme}/${elem.name}`">
            <div :data-id="elem.id" class="card-invisible" @click="props.currentGame.level.clickEvent" v-else>Carte</div> 
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