<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const savedData = JSON.parse(sessionStorage.gameInfo)
const router = useRouter()
const time = ref(0)
const success = ref(0)

let iterator = localStorage.getItem('nbLevels')

function backHome(){
    sessionStorage.clear()
    router.push({path: '/'})
}

function getStorageElem(_elementToGet, _elementToReturn){
    for(let i = 1; i <= iterator; i++){
        _elementToReturn += parseInt(localStorage.getItem(`${_elementToGet}${i}`))
    }
    return _elementToReturn
}

function formatTime(){
    let finalTime = getStorageElem('time', time.value)
    const minutes = Math.floor(finalTime / 60);
    const seconds = finalTime - minutes * 60;
    return minutes > 0 ? `${minutes} minutes et ${seconds} secondes` : `${seconds} secondes`
}

function formatSuccess(){
    return (getStorageElem('success', success.value)/iterator)
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