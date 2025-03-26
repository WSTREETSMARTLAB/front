<template>
  <v-text-field
      :label=label
      :v-model="modelValue"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
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
