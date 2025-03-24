<template>
  <v-container class="verify-wrapper">
    <div class="verify-form bg-primary">
      <v-form>
        <TextInput :label="'Verify Code'" />
        <ConfirmBtn />
      </v-form>
    </div>
  </v-container>
</template>

<script>
import ConfirmBtn from "../components/ConfirmBtn.vue";
import TextInput from "../components/TextInput.vue";

export default {
  name: "Verify" ,
  components: {TextInput, ConfirmBtn}
}
</script>

<style scoped>
.verify-wrapper {
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
}

.verify-form{
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
