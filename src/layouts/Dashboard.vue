<template>
  <v-layout>
    <v-app-bar app color="primary" class="d-flex justify-space-between align-center">
      <v-avatar class="ml-2" size="48">
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Avatar" />
      </v-avatar>
      <v-spacer />
      <v-icon class="mr-2" icon="mdi-email-outline" color="white" size="36" />
      <v-icon class="mr-2" icon="mdi-logout" color="white" size="36" />
    </v-app-bar>

    <v-main>
      <div class="menu-button" @click="menuOpen = !menuOpen">
        <v-icon icon="mdi-menu" class="bg-beige" size="42" />
      </div>

      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "Dashboard",
  data () {
    return {
      menuOpen: false
    }
  }
}
</script>

<style scoped>
.menu-button{
  background-color: #F5E1A4;
  height: 4rem;
  width: 4rem;
  border-radius: 8px;
  margin: 0.5rem;
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background-color 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.96);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
}
</style>
