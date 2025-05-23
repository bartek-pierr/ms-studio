<script setup>
defineProps({
    TopMsg: String,
    BottomMsg: String
})
</script>

<template>
  <div class="headerText">
    <span><h1 class="headerMain">{{ TopMsg }}</h1></span>
    <span><h1 class="headerMain">{{ BottomMsg }}</h1></span>
  </div>
</template>

<style scoped>
.headerText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 4px;
    gap: 8px;
}

h1 {
  color: black;
  font-weight: 700;
  font-size: 1rem;
  text-align: left;
  line-height: 0.8;
}
/* @media (min-width: 1024px) {
  .headerText h1,
  .headerText h3 {
    text-align: left;
  }
} */
</style>
