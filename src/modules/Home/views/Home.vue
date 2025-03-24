<template>
  <v-container class="pa-0 fill-height">
    <Intro />

  </v-container>
</template>

<script>
import Intro from "@/modules/Home/components/Intro.vue";
export default {
  name: "Home",
  components: {Intro},
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>
