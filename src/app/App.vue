<template>
  <v-app>
    <component :is="layoutComponent" />
  </v-app>
</template>

<script>
import Default from '@/layouts/Default.vue'
import Auth from "@/layouts/Auth.vue";

export default {
  name: 'App',
  computed: {
    layoutComponent () {
      const layout = this.$route.meta.layout || 'default';

      if (layout === 'auth') {
          return Auth;
      }

      return Default;
    }
  }
}
</script>
