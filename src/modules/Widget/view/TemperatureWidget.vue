<template>
  <v-container class="tool-wrapper">
    <div>
      Sensor Name
    </div>
    <div class="temperature-widget-wrapper">
      <div class="temperature-widget">Temperature</div>
      <div class="humidity-widget">Humidity</div>
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
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.temperature-widget-wrapper{
  background-color: #F5E1A4;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  flex-direction: column;
}

@media (min-width: 960px) {
  .temperature-widget-wrapper{
    flex-direction: row;
  }
}
</style>
