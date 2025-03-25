<template>
  <v-container class="tool-wrapper">
    <div class="tool-card">
      Temperature & Humidity
    </div>
    <div class="tool-card">
      Temperature & Humidity
    </div>
    <div class="tool-card">
      Temperature & Humidity
    </div>
  </v-container>
</template>

<script>
export default {
  name: "SmartTools"
}
</script>

<style scoped>
.tool-wrapper{
  margin-top: 10vh;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.tool-card {
  background-color: #f5f5f5;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  min-height: 30vh;
  width: 100%;
  max-width: 400px;
}

@media (min-width: 960px) {
  .tool-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tool-card {
    width: 30%;
    max-width: none;
  }
}
</style>
