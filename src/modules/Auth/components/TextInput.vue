<template>
  <v-text-field
      :label=label
      v-model="modelValue"
      type="text"
      variant="outlined"
      hide-details
      density="compact"
      @input="$emit('update:modelValue', $event)"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: {
      type: String,
    },
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
