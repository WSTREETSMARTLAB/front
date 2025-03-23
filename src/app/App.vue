<template>
  <v-app>
    <component :is="layoutComponent" />
  </v-app>
</template>

<script>
import Default from '@/layouts/Default.vue'

export default {
  name: 'App',
  computed: {
    layoutComponent () {
      // const layout = this.$route.meta.layout || 'default'
      // return layout === 'empty' ? EmptyLayout : Default
      return Default;
    }
  }
}
</script>
