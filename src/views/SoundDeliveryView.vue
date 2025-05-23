<script setup>
import InfoIcon from '../components/icons/IconInfo.vue'
</script>

<template>
  <div class="soundDelivery">
    <div class="warrningBox">
      <span class="warrningIcon">
        <InfoIcon fill="rgb(238, 161, 18)" />
      </span>
      <p class="warrningParagraph">
        Przepraszamy, strona jest dalej w budowie. Wkrótce będzie dostępna pełna wersja, a tymczasem niektóre funkcjonalności mogą działać nieprawidłowo.
      </p>
    </div>
    <h1>Już wkrótce!</h1>
  </div>
</template>

<style scoped>
.soundDelivery {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>