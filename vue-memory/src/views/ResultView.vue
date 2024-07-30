<script setup>
import { useRouter } from 'vue-router'
import Format from '@/assets/Format';

const router = useRouter()
const results = new Format()
const savedData = JSON.parse(sessionStorage.gameInfo)
let finalTime = 0
let finalSuccesses = 0


function backHome(){
    sessionStorage.clear()
    localStorage.clear()
    router.push({path: '/'})
}

</script>

<template>
    <div>
        <p>Nom : {{ savedData.playerName }}</p>
        <p>Date et heure de début de l'épreuve : {{ savedData.date }}</p>
        <p>Temps total : {{ results.formatTime(finalTime) }}</p>
        <p>Taux de succès moyen : {{ results.formatSuccess(finalSuccesses) }}%</p>
        <button type="button" @click="backHome">Revenir à la page d'accueil</button>
    </div>
</template>

<style scoped>

</style>