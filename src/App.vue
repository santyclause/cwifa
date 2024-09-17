<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <!-- <header>
    <Navbar />
  </header> -->
  <main class="container-fluid">
    <section class="row">
      <div class="col-2">
        <Navbar />
      </div>
      <div class="col-10 pt-5">
        <router-view />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';


</style>
