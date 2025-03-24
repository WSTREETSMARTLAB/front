<template>
  <v-container class="register-wrapper">
    <div class="register-form bg-primary">
      <v-form>
        <TextInput :label="'Username'"/>
        <TextInput :label="'Email'" />
        <TextInput :label="'Password'" />
        <ConfirmBtn />
      </v-form>
    </div>
  </v-container>
</template>

<script>
import TextInput from "../components/TextInput.vue";
import ConfirmBtn from "../components/ConfirmBtn.vue";

export default {
  name: "Register",
  components: {ConfirmBtn, TextInput }
}
</script>

<style scoped>
.register-wrapper {
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
}

.register-form{
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
