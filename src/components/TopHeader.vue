<script setup>
import { RouterLink } from 'vue-router'
import HeaderText from '../components/HeaderText.vue'

defineProps({
    TopMsg: String,
    BottomMsg: String
})
</script>

<template>
    <div class="topHeader">
        <div class="topHeader__left">
            <div class="topHeader__logo">
                <img alt="MS Studio logo" class="logo" src="@/assets/logo.svg" />
            </div>

            <div class="topHeader__text">
                <HeaderText TopMsg="Projektowanie" BottomMsg="i Zabudowa" />
            </div>
        </div>

        <div class="topHeader__navigation">
            <nav>
                <RouterLink to="/">Start</RouterLink>
                <RouterLink to="/ms-studio">MS Studio</RouterLink>
                <RouterLink to="/oferta">Oferta</RouterLink>
                <RouterLink to="/dla-firm">Dla Firm</RouterLink>
                <RouterLink to="/galeria">Galeria</RouterLink>
                <RouterLink to="/kontakt">Kontakt</RouterLink>
                <RouterLink to="/sound-delivery">Sound Delivery</RouterLink>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.topHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 8px;
}

.topHeader__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-right: 20px;
}

.topHeader__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: fit-content;
    margin-right: 20px;
}

.logo {
    height: 100%;
}

.topHeader__text {
    height: 100%;
}

.topHeader__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid rgb(180, 180, 180);
}

nav a:first-of-type {
  border: 0;
}
</style>