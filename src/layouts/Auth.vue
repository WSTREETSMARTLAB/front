<template>
  <v-layout>
    <v-main class="default-bg" color="secondary">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "Auth"
}
</script>

<style scoped>
.default-bg {
  min-height: 100vh;
  min-width: 100%;
}
</style>
