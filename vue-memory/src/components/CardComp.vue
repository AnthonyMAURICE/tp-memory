<script setup>
    const props = defineProps(['currentGame', 'card'])
    const urlFirstPart = '../src/assets/theme'
</script>

<template>
    <img :data-id="props.card.id" :class="[props.currentGame.level.maxDeckSize > 20 ? 'small-cards' : 'big-cards']" :src="`${urlFirstPart}/${props.currentGame.theme}/${props.card.name}`">
</template>

<style scoped>

</style>