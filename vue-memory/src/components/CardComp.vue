<script setup>
    const props = defineProps(['currentGame', 'card'])
    const urlFirstPart = '../src/assets/theme'

    
// Computed pour l'url de la carte

</script>

<template>
    <div class="cards">
        <img :data-id="props.card.id" :class="[props.currentGame.level.maxDeckSize > 20 ? 'small-cards' : 'big-cards']" :src="`${urlFirstPart}/${props.currentGame.theme}/${props.card.name}`">
        <p v-if="props.currentGame.level.checkIfLevelCleared()">Clickée {{ props.card.clickCounter }} fois</p>
    </div>
</template>

<style scoped>
.cards{
    display: flex;
    flex-flow: column;
}
p{
    font-size: 1.5rem;
}
</style>