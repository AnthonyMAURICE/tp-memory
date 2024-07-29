<script setup>

const props = defineProps(['state'])

</script>


<template>
    <button type="button" @click="$emit('timerEvent')">{{ props.state }}</button>
</template>


<style scoped>
button{
    width: 90px;
    border-radius: 10px;
}

</style>