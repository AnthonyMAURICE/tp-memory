<script setup>

const props = defineProps(['state'])

</script>


<template>
    <button type="button" @click="$emit('timerEvent')">{{ props.state }}</button>
</template>


<style scoped>


</style>