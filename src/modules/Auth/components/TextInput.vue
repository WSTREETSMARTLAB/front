<template>
  <v-text-field
      :label=label
      type="text"
      variant="outlined"
      hide-details
      density="compact"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.v-text-field {
  background-color: white;
  color: black;
  border-radius: 8px;
  margin-top: 1vh;
}
</style>
