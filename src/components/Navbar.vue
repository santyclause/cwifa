<script setup>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { AppState } from '@/AppState.js';
import { artService } from '@/services/ArtService.js';

// const theme = ref(loadState('theme') || 'light')

// onMounted(() => {
//   document.documentElement.setAttribute('data-bs-theme', theme.value)
// })

// function toggleTheme() {
//   theme.value = theme.value == 'light' ? 'dark' : 'light'
//   document.documentElement.setAttribute('data-bs-theme', theme.value)
//   saveState('theme', theme.value)
// }

const currentPage = computed(() => AppState.currentPage);
const totalPages = computed(() => AppState.totalPages);

async function getArt(pgNum) {
  await artService.getArt(pgNum);
}

</script>

<template>
  <nav class="vh-100 d-flex flex-column pb-3">
    <router-link class="d-flex flex-column" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="/img/cw-logo.png" class="img-fluid" />
      </div>
    </router-link>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="d-flex flex-column flex-grow-1 align-items-center justify-content-between right-b" id="navbarText">
      <!-- <ul class="navbar-nav"> -->
        <!-- <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li> -->
      <!-- </ul> -->
      <!-- LOGIN COMPONENT HERE -->
      <!-- <div>
        <button class="btn text-light" @click="toggleTheme"
          :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
          <Icon :name="theme == 'light' ? 'weather-sunny' : 'weather-night'" />
        </button>
      </div> -->
      <Login />
      <div class="d-flex flex-column align-items-center">
        <i class="mdi mdi-book-open fs-2"></i>
        <p>{{currentPage}} of {{totalPages}}</p>
        <button @click="getArt(currentPage + 1)" :disabled="currentPage >= totalPages" class="pg-btn">next</button>
        <button @click="getArt(currentPage - 1)" :disabled="currentPage <= 1" class="pg-btn">previous</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

img {
  filter: invert(100%);
}

.right-b {
  border-right: 1px solid black;
}

.pg-btn {
  background-color: none;
  border: 2px solid maroon;
  border-radius: 100px;
  padding:0.5em 1em;
  width:100%;
  margin-bottom: 1em;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

</style>
