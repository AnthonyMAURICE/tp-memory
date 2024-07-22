<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const name = ref('')

function pushTo(name) { 
  if(validateName()){
    router.push({ path: name })
  }else{
    name.value = 'Entrée invalide'
  }
  
}

function validateName(){
  const regex = /^[a-zA-Z][a-zA-Z-_ \.]{3,}$/
  return regex.test(name.value)
}
</script>

<template>
  <form>
    <div>
      <label for="theme">Sélectionner le thème à utiliser :</label>
      <select name="theme" id="theme">
        <option value="colors">Couleurs</option>
        <option value="abstract">Formes abstraites</option>
        <option value="cards">Cartes à jouer</option>
      </select>
    </div>
    <div>
      <label for="mode">Sélectionner la variante :</label>
      <select name="mode" id="mode">
        <option value="memory">Test de mémoire</option>
        <option value="relearning">Réapprentissage</option>
      </select>
    </div>
    <div>
      <label for="name">Saisissez votre prénom et votre nom :</label>
      <input type="text" id="name" required v-model="name">
    </div>
    <div class="validation">
        <button @click="pushTo('/memory')" type="button">Démarrer</button>
    </div>
  </form>
</template>

<style scoped>
  form{
    width: 40%;
    margin: 15px;
    font-size: 2rem;
  }
  div{
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
    width: 50%;
    padding: 5px;
  }
  button{
    background-color: var(--color3);
    border: none;
    padding: 10px;
    margin: 5px 0;
  }
</style>
