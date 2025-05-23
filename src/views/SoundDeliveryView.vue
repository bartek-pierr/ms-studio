<script setup>
import InfoIcon from '../components/icons/IconInfo.vue'
</script>

<template>
  <div class="soundDelivery">
    <div class="warrningBox">
      <div class="warrningBox__wrapper">
        <span class="warrningIcon">
          <InfoIcon fill="rgb(238, 161, 18)" />
        </span>
        <p class="warrningParagraph">
          Przepraszamy, strona jest dalej w budowie. Wkrótce będzie dostępna pełna wersja, a tymczasem niektóre funkcjonalności mogą działać nieprawidłowo. Zapraszamy do kontaktu mailowego lub telefonicznego.
        </p>
        <div class="warrningBox__contact">
        <p class="warrningParagraph">
          Mail<br ><a href="mailto:kontakt@ms-studio.info.pl"><span>kontakt@ms-studio.info.pl</span></a>
        </p>
        <p class="warrningParagraph">
          Telefon<br ><a href="tel:691 806 875"><span>691 806 875</span></a>
        </p>
      </div>
      </div>
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