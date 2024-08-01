<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import TitleComp from '@/components/TitleComp.vue';

const router = useRouter()
const name = ref('')
const theme = ref('colors')
const mode = ref('memory')
const date = ref(new Date(Date.now()).toLocaleString())

function pushTo(route) { 
  if(validateName()){
    saveInSessionStorage()
    router.push({ path: route })
  }else{
    name.value = 'Entrée invalide'
  }
}

function saveInSessionStorage(){
  const gameInfoSave = {playerName: name.value, gameTheme: theme.value, gameMode: mode.value, date: date.value}
  sessionStorage.setItem('gameInfo', JSON.stringify(gameInfoSave))
}

function validateName(){
  const regex = /^[a-zA-Z-_ \.]{3,}$/
  return regex.test(name.value)
}
</script>

<template>
  <div class="global-div">
    <title-comp />
    <form>
      <div class="form-div">
        <label for="theme">Sélectionner le thème à utiliser :</label>
        <select name="theme" id="theme" v-model="theme">
          <option value="colors">Couleurs</option>
          <option value="abstract">Formes abstraites</option>
          <option value="cards">Cartes à jouer</option>
        </select>
      </div>
      <div class="form-div">
        <label for="mode">Sélectionner la variante :</label>
        <select name="mode" id="mode" v-model="mode">
          <option value="memory">Test de mémoire</option>
          <option value="relearning">Réapprentissage</option>
        </select>
      </div>
      <div class="form-div">
        <label for="name">Saisissez votre prénom et votre nom :</label>
        <input type="text" id="name" required v-model="name">
      </div>
      <div class="form-div validation">
          <button @click="pushTo('/memory')" type="button">Démarrer</button>
      </div>
    </form>
  </div>
  
</template>

<style scoped>
  .global-div{
    padding: 2px 10px;
    margin: 0 55px;
  }
  form{
    width: 30%;
    margin: 15px;
    font-size: 2rem;
  }
  .form-div{
    display: flex;
    flex-direction: column;
    margin: 5px 0;
  }
  .validation{
    border-top: 1px solid var(--color2);
  }
  label{
    margin: 5px 0;
  }
  select, input{
    padding: 5px;
  }
  select{
    width: 33%;
  } 
  input{
    width: 50%;
  }

  button{
    margin: 5px 0;
  }
  
</style>
