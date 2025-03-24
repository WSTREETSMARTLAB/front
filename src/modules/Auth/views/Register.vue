<template>
  <v-container class="register-wrapper">
    <div class="register-form bg-primary">
      <v-form>
        <TextInput :label="'Username'"/>
        <TextInput :label="'Email'" />
        <TextInput :label="'Password'" />

        <v-btn
            type="submit"
            class="bg-secondary text-beige rounded-pill"
        >
          Confirm
        </v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import TextInput from "../components/TextInput.vue";

export default {
  name: "Register",
  components: { TextInput }
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

.v-btn{
  margin-top: 1vh;
}
</style>
