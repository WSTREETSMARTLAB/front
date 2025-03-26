<template>
  <v-container class="register-wrapper">
    <div class="register-form bg-primary">
      <v-form @submit.prevent="onSubmit">
        <TextInput :label="'Username'" v-model="form.username"/>
        <TextInput :label="'Email'" v-model="form.email" />
        <TextInput :label="'Password'" v-model="form.password" />
        <ConfirmBtn />
      </v-form>
    </div>
  </v-container>
</template>

<script>
import TextInput from "../components/TextInput.vue";
import ConfirmBtn from "../components/ConfirmBtn.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  components: { ConfirmBtn, TextInput },
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    async onSubmit() {
      this.$store.dispatch('setLoading', true);
      await this.register(this.form);
    }
  }
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
