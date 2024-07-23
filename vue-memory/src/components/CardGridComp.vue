<script setup>
import { game, level } from '../assets/store.js'

level.value.cards = await getData()
const cards = level.value.cards
</script>

<script>
async function getData(){
    const response = await fetch(`../../src/assets/theme/${game.value.theme}.json`)
    const data = await response.json()
    return data
}
</script>

<template>
    <div v-for="items in cards">{{ items.name }}</div>
</template>

<style scoped>

</style>