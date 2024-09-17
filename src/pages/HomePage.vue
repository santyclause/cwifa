<script setup>
import { AppState } from '@/AppState.js';
import { artService } from '@/services/ArtService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';


onMounted(() => {
  getArt();
})

const arts = computed(() => AppState.arts);
const activeArt = computed(() => AppState.activeArt);
const popAct = ref(false);

async function getArt() {
  try {
    await artService.getArt();
  } catch(error) {
    Pop.error(error)
  }
}

function setActive(artId) {
  artService.setActive(artId);
}

function togglePopup() {
  popAct.value = !popAct.value;
}

</script>

<template>
  <section class="cont row mt-4">
    <!-- <div class="col-3 bg-success">green</div>
    <div class="col-3 bg-info">blue</div>
    <div class="col-3 bg-warning">yellow</div>
    <div class="col-3 bg-danger">red</div> -->
    <div class="col-12">
      <h4>CodeWorks Institute of Fine Art</h4>
    </div>
    <div v-for="art in arts" :key="art.id" class="col-3 mb-4 artRects">
      <img :src="art.smallImgUrl" :alt="art.description" @click="setActive(art.id), togglePopup()" role="button" class="img-fluid">
    </div>
    <div v-if="popAct && activeArt" class="col-12 p-0 popup container-fluid">
      <section class="row popImg text-light">
        <div class="col-12 h-100 d-flex justify-content-center mb-3">
          <img :src="activeArt.fullImgUrl" class="img-fluid-height">
        </div>
        <div class="col-10 px-5">
          <p>{{ activeArt.description }}</p>
        </div>
        <div class="col-2">
          <p>Attributed to:</p>
          <p>{{ activeArt.attribution }}</p>
        </div>
        <div class="x">
          <p role="button" @click="togglePopup()" >X</p>
        </div>
      </section>
      <div class="popDesc"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cont {
  position: relative;
}

.artRects {
  filter:drop-shadow(4px 4px 5px black)
}

.popup {
  position: fixed;
  width:80%;
  height:90vh;
  left:18%;
  background-color: #323232;
}

.x {
  position: absolute;
  font-size:20px;
  left: 95%;
  top:10px;
  text-shadow: 1px 1px 3px black;
}

.popImg {
  height: 80%;
  position: relative;
}

.popDesc {
  height:20%;
}

.img-fluid-height {
  max-height: 100%;
  width:auto;
  max-width:100%;
}
</style>
