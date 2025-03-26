<template>
  <v-container class="register-wrapper">
    <div class="register-form bg-primary">
      <v-form @submit.prevent="onSubmit">
        <TextInput :label="'Username'" v-model="form.username"/>
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
      await this.register(this.form)
          .then((res) => {
            this.$store.dispatch('setLoading', false)
            console.log(res);
          })
          .catch((err) => {
            this.$store.dispatch('setLoading', false);
            console.error(err);
          });
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
