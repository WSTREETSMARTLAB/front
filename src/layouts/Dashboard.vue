<template>
  <v-layout>
    <v-app-bar app color="primary" class="d-flex justify-space-between align-center">
      <v-btn
          icon
          variant="flat"
          class="button-icon"
          @click="logoutUser"
      >
        <v-icon icon="mdi-logout" color="beige" size="36" />
      </v-btn>
      <v-spacer />
      <v-btn
          icon
          variant="flat"
          class="button-icon mr-1"
      >
        <v-icon icon="mdi-email-outline" color="beige" size="36" />
      </v-btn>
      <v-btn
          icon
          variant="flat"
          class="avatar-button"
      >
        <v-avatar size="48">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Avatar" />
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="menuOpen"
        temporary
        location="left"
        width="240"
        class="bg-secondary"
    >
      <v-list>
        <v-list-item title="Organization" prepend-icon="mdi-domain" @click="menuOpen = false" />
        <v-list-item title="Smart Tools" prepend-icon="mdi-lightbulb-on-outline" @click="menuOpen = false" />
        <v-list-item title="Alarms" prepend-icon="mdi-alert" @click="menuOpen = false" />
        <v-list-item title="Settings" prepend-icon="mdi-cog-outline" @click="menuOpen = false" />
        <v-list-item title="Weather" prepend-icon="mdi-weather-rainy" @click="menuOpen = false" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div
          v-if="!menuOpen"
          class="menu-button bg-primary"
          @click="menuOpen = true"
      >
        <v-icon icon="mdi-menu" class="bg-primary" color="beige" size="42" />
      </div>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Dashboard",
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async logoutUser() {
      await this.logout();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.menu-button{
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
    background-color: #f9e9b8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.96);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
}

.button-icon {
  background-color: #1B5E20 !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #2E7D32 !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }
}

.avatar-button {
  border-radius: 50%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding: 4px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  }
}
</style>
