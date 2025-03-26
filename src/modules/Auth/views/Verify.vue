<template>
  <v-container class="verify-wrapper">
    <div class="verify-form bg-primary">
      <v-form @submit.prevent="onSubmit">
        <TextInput :label="'Verification Code'" v-model="code"/>
        <ConfirmBtn />
      </v-form>
    </div>
  </v-container>
</template>

<script>
import ConfirmBtn from "../components/ConfirmBtn.vue";
import TextInput from "../components/TextInput.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Verify" ,
  components: {TextInput, ConfirmBtn},
  data() {
    return {
      code: ''
    }
  },
  computed: {
    ...mapGetters('auth', ['getEmail'])
  },
  methods: {
    ...mapActions('auth', ['verify']),
    async onSubmit() {
      const payload = {
        email: this.getEmail,
        code: this.code
      }
      await this.verify(payload);
      this.$router.push('/register_success');
    }
  }
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
