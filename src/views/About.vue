<script setup>
import { ref } from "vue";
const motor = ref([ 
  {name: "Mio jember", cc: "110cc", color: "red"},
  {name: "Vario karbu", cc: "110cc", color: "black"}
]);
</script>

<template>
  <div>
  <ul v-for="motors in motor" :key="motors.name">
      <li>Nama Motor: {{ motors.name }}</li>
      <li>CC Motor: {{ motors.cc }}</li>
      <li>Warna Motor: {{ motors.color }}</li>
  </ul>
  </div>
</template>

<style scoped>

</style>