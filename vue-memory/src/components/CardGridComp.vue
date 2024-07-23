<script setup>
import { game } from '../assets/store.js'
</script>


<template>
    <div v-for="elem in game.value.level.cards">{{ elem }}</div>
</template>

<style scoped>

</style>