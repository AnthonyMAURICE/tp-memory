<script setup>
import { useRouter } from 'vue-router'
import Format from '@/assets/Format';
import Results from '@/assets/Results';
import { json2csv } from 'json-2-csv';

const router = useRouter()
const results = new Format()
const savedData = JSON.parse(sessionStorage.gameInfo)
let finalTime = 0
let finalSuccesses = 0

const options = {
    delimiter : {
        wrap  : '\'', // Single Quote (') character
        field : ';', // Tab field delimiter
        eol   : '\n' // Newline delimiter
    },
};

function backHome(){
    sessionStorage.clear()
    localStorage.clear()
    router.push({path: '/'})
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function finalSave(){
    const save = new Results(savedData.playerName, savedData.date, results.formatTime(finalTime, true), results.formatSuccess(finalSuccesses))
    download("save.csv", json2csv(save, options));
}

</script>

<template>
    <div>
        <p>Nom : {{ savedData.playerName }}</p>
        <p>Date et heure de début de la partie : {{ savedData.date }}</p>
        <p>Temps total : {{ results.formatTime(finalTime, true) }}</p>
        <p>Taux de succès moyen : {{ results.formatSuccess(finalSuccesses) }}%</p>
        <button type="button" @click="backHome">Revenir à la page d'accueil</button>
        <button type="button" @click="finalSave">Télécharger les résultats (format CSV)</button>
    </div>
</template>

<style scoped>

</style>