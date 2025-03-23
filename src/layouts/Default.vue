<template>
  <v-layout>
    <v-app-bar app>Header</v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>Footer</v-footer>
  </v-layout>
</template>

<script>
export default {
  name: "Default"
}
</script>

<style scoped>
</style>
