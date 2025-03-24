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
  </v-layout>
</template>

<script>
export default {
  name: "Dashboard",
}
</script>

<style scoped>

</style>
