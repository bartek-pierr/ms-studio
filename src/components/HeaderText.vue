<script setup>
defineProps({
    TopMsg: String,
    BottomMsg: String
})
</script>

<template>
  <div class="headerText">
    <span><h1>{{ TopMsg }}</h1></span>
    <span><h1>{{ BottomMsg }}</h1></span>
  </div>
</template>

<style scoped>
.headerText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.headerText h1 {
  font-weight: 700;
  font-size: 1.4rem;
  text-align: left;
}

/* @media (min-width: 1024px) {
  .headerText h1,
  .headerText h3 {
    text-align: left;
  }
} */
</style>
