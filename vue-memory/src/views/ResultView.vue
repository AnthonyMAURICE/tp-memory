<script setup>
import { useRouter } from 'vue-router'

const savedData = JSON.parse(sessionStorage.gameInfo)
const finalData = JSON.parse(localStorage.getItem('finalInfos'))
console.log(finalData)
const router = useRouter()

function backHome(){
    sessionStorage.clear()
    router.push({path: '/'})
}


</script>

<template>
    <div>
        <p>Nom : {{ savedData.playerName }}</p>
        <p>Date et heure de début de l'épreuve : {{ savedData.date }}</p>
        <button type="button" @click="backHome">Revenir au début</button>
    </div>
</template>

<style scoped>

</style>