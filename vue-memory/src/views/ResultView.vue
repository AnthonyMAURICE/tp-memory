<script setup>
import { useRouter } from 'vue-router'

const savedData = JSON.parse(sessionStorage.gameInfo)
const router = useRouter()
let finalTime = 0
let finalSuccesses = 0

const resultArray = getStorageElem()

function backHome(){
    sessionStorage.clear()
    localStorage.clear()
    router.push({path: '/'})
}

function getStorageElem(){
    return JSON.parse(localStorage.levelsSave)
}

function formatTime(){
    resultArray.forEach(elem => finalTime += elem.time)
    const minutes = Math.floor(finalTime / 60);
    const seconds = finalTime - minutes * 60;
    return minutes > 0 ? `${minutes} minutes et ${seconds} secondes` : `${seconds} secondes`
}

function formatSuccess(){
    resultArray.forEach(elem => finalSuccesses += elem.success)
    return (finalSuccesses/parseInt(localStorage.getItem('nbeLevels')))
}
</script>

<template>
    <div>
        <p>Nom : {{ savedData.playerName }}</p>
        <p>Date et heure de début de l'épreuve : {{ savedData.date }}</p>
        <p>Temps total : {{ formatTime() }}</p>
        <p>Taux de succès moyen : {{ formatSuccess() }}%</p>
        <button type="button" @click="backHome">Revenir à la page d'accueil</button>
    </div>
</template>

<style scoped>

</style>