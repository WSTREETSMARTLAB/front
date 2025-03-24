<template>
  <v-container class="register-wrapper">
    <div class="register-form bg-primary">
      <v-form>
        <v-text-field
            label="Username"
            type="text"
            variant="outlined"
            hide-details
        />
        <v-text-field
            label="Email"
            type="text"
            variant="outlined"
            hide-details
        />
        <v-text-field
            label="Password"
            type="text"
            variant="outlined"
            hide-details
        />
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Register"
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

.v-text-field {
  background-color: white;
  color: black;
  border-radius: 8px;
  margin-top: 1vh;
}
</style>
