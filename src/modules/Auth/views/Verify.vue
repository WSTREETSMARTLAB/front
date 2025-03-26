<template>
  <v-container class="verify-wrapper">
    <div class="verify-form bg-primary">
      <v-form>
        <TextInput :label="'Verification Code'" :v-model="code"/>
        <ConfirmBtn />
      </v-form>
    </div>
  </v-container>
</template>

<script>
import ConfirmBtn from "../components/ConfirmBtn.vue";
import TextInput from "../components/TextInput.vue";
import {mapActions} from "vuex";

export default {
  name: "Verify" ,
  components: {TextInput, ConfirmBtn},
  data() {
    return {
      code: ''
    }
  },
  methods: {
    ...mapActions('auth', ['verify']),
    async onSubmit() {
      await this.verify(this.code);
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
