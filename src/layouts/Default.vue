<template>
  <v-layout>
    <v-app-bar app color="primary" class="d-flex justify-space-between align-center">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon class="d-md-none me-2" @click="menuOpen = !menuOpen" />
      </div>
      <v-spacer />
      <v-btn to="/login" class="bg-secondary rounded-pill">
        Sign In
      </v-btn>
    </v-app-bar>

    <v-expand-transition>
      <div v-if="menuOpen" class="dropdown-mobile d-md-none">
        <v-list nav dense>
          <v-list-item to="/about"><v-list-item-title>About</v-list-item-title></v-list-item>
          <v-list-item to="/product"><v-list-item-title>Product</v-list-item-title></v-list-item>
          <v-list-item to="/pricing"><v-list-item-title>Prices</v-list-item-title></v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

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
  name: 'Default',
  data () {
    return {
      menuOpen: false
    }
  }
}
</script>

<style scoped>
.dropdown-mobile {
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  background-color: #004D40;
  z-index: 10;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dropdown-mobile .v-list {
  padding: 0;
  background-color: transparent;
}

.dropdown-mobile .v-list-item {
  background-color: #004D40;
  text-align: center;
  color: white;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
