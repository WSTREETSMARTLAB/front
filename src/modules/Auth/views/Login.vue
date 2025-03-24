<template>
  <v-container class="login-wrapper">
    <div class="login-form bg-primary">
      <v-form>
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
  name: "Login",
  components: {ConfirmBtn, TextInput}
}
</script>

<style scoped>
.login-wrapper {
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
}

.login-form{
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
