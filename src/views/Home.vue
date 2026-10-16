<script setup>
import { ref } from "vue";
const nama = "Nanda";
let animals = ["Albi", "Wijaya", "Kucing"];
const gamz = ref(["Pripayer", "Mobalejen", "Codm", "Halo"]);
let img ="/yoga.jpeg";
const stock= 9;
</script>
<template>
  <h1>You did it!</h1>
  <h2>Nama saya {{ nama }}</h2>
  <h4>Hobby saya</h4>
  <h5>Hewan kesukaan saya adalah {{ animals[2] }}</h5>
  <p v-if="stock> 0">Available</p>
  <p v-else>Out</p>
  <ul v-for="game in gamz" :key="game">
    <li>
      {{ game }}
    </li>
  </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  img{
    height: 200px;
    width: 300px;
  }
}
</style>
