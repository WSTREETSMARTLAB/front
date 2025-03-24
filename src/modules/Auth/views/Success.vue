<template>
  <v-container class="success-wrapper">
    <div class="success-form bg-primary">
      <div class="text-center mr-2">Register Successful</div>
      <ConfirmBtn :label="'Go to Dashboard'" />
    </div>
  </v-container>
</template>

<script>
import ConfirmBtn from "../components/ConfirmBtn.vue";

export default {
  name: "Success" ,
  components: {ConfirmBtn}
}
</script>

<style scoped>
.success-wrapper {
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
}

.success-form{
  padding: 2rem;
  width: 100%;
  max-width: 30rem;
  min-height: 10rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
