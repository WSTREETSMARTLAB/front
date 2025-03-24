<template>
  <v-layout class="auth-layout">
    <div class="bg-gradient auth-left" />
    <v-main class="auth-right bg-secondary">
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
.auth-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
  }
}

.auth-left {
  display: none;

  @media (min-width: 960px) {
    display: block;
    width: 50%;
  }
}

.auth-right {
  width: 100%;

  @media (min-width: 960px) {
    width: 50%;
  }
}
</style>
