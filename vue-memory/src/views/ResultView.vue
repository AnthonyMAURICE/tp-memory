<script setup>
import { useRouter } from 'vue-router'

const savedData = JSON.parse(sessionStorage.gameInfo)
const router = useRouter()

function backHome(){
    sessionStorage.clear()
    router.push({path: '/'})
}

// const totalTime = computed(() =>{
    
// })

</script>

<template>
    <div>
        <p>Nom : {{ savedData.playerName }}</p>
        <p>Date : {{ savedData.date }}</p>
        <button type="button" @click="backHome">Revenir au début</button>
    </div>
</template>

<style scoped>

</style>