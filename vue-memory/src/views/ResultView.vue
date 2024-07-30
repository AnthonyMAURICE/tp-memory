<script setup>
import { useRouter } from 'vue-router'
import Format from '@/assets/Format';
import DownloadData from '@/assets/DownloadData';

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

function save(){
    const save = {
        name: savedData.playerName,
        date: savedData.date,
        totalTime : results.formatTime(finalTime, true),
        successRate: results.formatSuccess(finalSuccesses)
    }
    const dataToDownload = new DownloadData('save.csv', save)
    dataToDownload.download()
}

</script>

<template>
    <div>
        <p>Nom : {{ savedData.playerName }}</p>
        <p>Date et heure de début : {{ savedData.date }}</p>
        <p>Temps total : {{ results.formatTime(finalTime, true) }}</p>
        <p>Taux de succès moyen : {{ results.formatSuccess(finalSuccesses) }}%</p>
        <button type="button" @click="backHome">Revenir à la page d'accueil</button>
        <button type="button" @click="save">Télécharger les résultats (format CSV)</button>
    </div>
</template>

<style scoped>
div{
    margin: 15px;
}
button{
    cursor: pointer;
    margin-left: 0;
}
</style>