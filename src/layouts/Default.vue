<template>
  <v-layout>
    <v-app-bar app color="primary" class="d-flex justify-space-between align-center">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon class="text-beige d-md-none me-2" @click="menuOpen = !menuOpen" />

        <div class="d-none d-md-flex gap-4 ms-4">
          <v-btn to="/about" variant="text" class="text-beige">
            About
          </v-btn>
          <v-btn to="/product" variant="text" class="text-beige">
            Product
          </v-btn>
          <v-btn to="/pricing" variant="text" class="text-beige">
            Prices
          </v-btn>
        </div>
      </div>
      <v-spacer />
      <v-btn to="/login" class="bg-secondary text-beige rounded-pill">
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

        <div class="register-line text-center py-3">
          New? <RouterLink to="/register" class="text-beige register-link">Create an account!</RouterLink>
        </div>
      </div>
    </v-expand-transition>

    <v-main>
      <router-view />
    </v-main>
    <v-footer app color="primary" class="px-2 d-flex justify-space-between align-center">
      <span class="text-caption text-beige">&copy; wstreet smart lab</span>
      <div class="d-flex gap-2">
        <img class="mr-1" :src="'/icons/W5SMTLogo.svg'" alt="Logo" style="width: 24px; height: 24px;" />
        <v-icon class="text-beige mr-1">mdi-linkedin</v-icon>
        <v-icon class="text-beige mr-1">mdi-instagram</v-icon>
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

.register-line {
  color: white;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.register-link {
  color: #FFB300; /* твой accent */
  font-weight: bold;
  margin-left: 4px;
  text-decoration: underline;
}
</style>
