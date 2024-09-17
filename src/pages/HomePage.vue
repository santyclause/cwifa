<script setup>
import { artService } from '@/services/ArtService.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';


onMounted(() => {
  getArt();
})

async function getArt() {
  try {
    await artService.getArt();
  } catch(error) {
    Pop.error(error)
  }
}

</script>

<template>
  <section class="row">
    <!-- <div class="col-3 bg-success">green</div>
    <div class="col-3 bg-info">blue</div>
    <div class="col-3 bg-warning">yellow</div>
    <div class="col-3 bg-danger">red</div> -->
    <div class="col-12 mt-4">
      <h4>CodeWorks Institute of Fine Art</h4>
    </div>
    <div class="col-12">
      output
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
