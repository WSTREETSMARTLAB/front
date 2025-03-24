<template>
  <v-btn
      type="submit"
      class="bg-secondary text-beige rounded-pill"
  >
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: "ConfirmBtn",
  props: {
    label: {
      type: String,
      default: 'Confirm'
    }
  }
}
</script>

<style scoped>
.v-btn{
  margin-top: 1vh;
  width: 100%;
}
</style>
