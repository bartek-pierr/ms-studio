<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopHeader from './components/TopHeader.vue'
</script>

<template>
  <div class="landingPage">
    <div class="landingPage__image">
      <img src="../public/bgHeader.jpg" class="bgHeader" alt="rysunek zabudowy kuchennej">
    </div>

    <header class="landingPage__header">
    <TopHeader />
    </header>

    <div class="landingPage__routerView">
      <RouterView />
    </div>

    <!-- <footer class="landingPage__footer">
      <p>© 2023 MS Studio</p>
    </footer> -->
  </div>
</template>

<style scoped>
.landingPage {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
}

.landingPage__image {
  width: 100%;
  height: 56vh;
}

.bgHeader {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.landingPage__header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12vh;
  background-color: #376877;
}

.landingPage__routerView {
  width: 100vw;
  height: 100%;
  padding: 16px 32px;
}

.landingPage__footer {
  width: 100%;
  height: 16vh;
  background-color: rgb(236, 236, 236);
}

/* @media (min-width: 390px) {
.wrapper {
  margin-bottom: 40px;
}
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
