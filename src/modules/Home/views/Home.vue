<template>
  <v-container class="pa-0 fill-height">

    <v-container class="intro-block text-center">
      <div class="intro-content">
        <div class="intro-top">
          <img :src="FullLogo" alt="WSTREET SMART LAB logo" />
        </div>

        <!-- Текст -->
        <div class="intro-middle">
          <h1 class="title">WSTREET SMART LAB</h1>
          <p class="subtitle">We love technologies</p>
        </div>
      </div>
    </v-container>

  </v-container>
</template>

<script>
import FullLogo from "@/assets/icons/FullLogo.svg"
export default {
  name: "Home",
  data() {
    return {
      FullLogo,
    }
  }
}
</script>

<style scoped>
.intro-block {
  //padding: 64px 16px 32px;
  .intro-content {
    display: grid;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 24px;

    @media (min-width: 600px) {
      max-width: 500px;
    }

    @media (min-width: 960px) {
      max-width: 960px;
    }
  }

  .intro-top img {
    max-width: 100%;
    height: auto;
    max-height: 180px;
  }

  .intro-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 2rem;
      color: $primary-color;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 1.1rem;
      color: $dark-gray;
    }
  }
}
</style>
