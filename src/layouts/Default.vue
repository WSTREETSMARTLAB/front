<template>
  <v-layout>
    <v-app-bar app color="primary" class="d-flex justify-space-between align-center">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon class="d-md-none me-2" />
      </div>
      <v-spacer />
      <v-btn to="/login" class="bg-secondary rounded-pill">
        Sign In
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app color="primary" class="px-2 d-flex justify-space-between align-center">
      <span class="text-caption">&copy; wstreet smart lab</span>
      <div class="d-flex gap-2">
        <v-icon>mdi-linkedin</v-icon>
        <v-icon>mdi-instagram</v-icon>
      </div>
    </v-footer>
  </v-layout>
</template>

<script>
export default {
  name: "Default"
}
</script>

<style scoped>
</style>
