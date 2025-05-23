<script setup>
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'
import InfoIcon from '../components/icons/IconInfo.vue'


const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="home">
    <div class="warrningBox">
      <span class="warrningIcon">
        <InfoIcon fill="rgb(238, 161, 18)" />
      </span>
      <p class="warrningParagraph">
        Przepraszamy, strona jest dalej w budowie. Wkrótce będzie dostępna pełna wersja, a tymczasem niektóre funkcjonalności mogą działać nieprawidłowo.
      </p>
    </div>
    <h1 class="headerMain">Dlaczego MS Studio?</h1>

    <div class="home-item">
      <CommunityIcon fill="#376877" />
      <div class="home-heading">
        Świadczymy kompleksowe usługi pomiaru i projektowania zabudowy meblowej oraz aranżacji przestrzeni.
      </div>
    </div>

    <div class="home-item">
      <DocumentationIcon fill="#376877" />
      <div class="home-heading">
        Współpracujemy ze sprawdzonymi i doświadczonymi w branży wykonawcami.
      </div>
    </div>

    <div class="home-item">
      <ToolingIcon fill="#376877" />
      <div class="home-heading">
        Przygotowujemy wysokiej jakości wizualizacje i projekty z wykorzystaniem programu CAD.
      </div>
    </div>

    <div class="home-item">
      <DocumentationIcon fill="#376877" />
      <div class="home-heading">
        <span class="paragraphBold">Projekty zabudowy dostępne również w wersji VR.</span>
      </div>
    </div>

    <div class="home-item">
      <EcosystemIcon fill="#376877" />
      <div class="home-heading">
        Uwzględniamy tradycyjne wzornictwo lub sięgamy po najnowsze trendy i rozwiązania w branży meblowej.
      </div>
    </div>

    <div class="home-item">
      <CommunityIcon fill="#376877" />
      <div class="home-heading">
        Uwzględniamy Twoje indywidualne upodobania z uwzględnieniem stylu, wykorzystywanych materiałów, kolorystyki.
      </div>
    </div>

    <div class="home-item">
      <SupportIcon fill="#376877" />
      <div class="home-heading">
        Korzystamy ze sprawdzonych materiałów i akcesoriów.
      </div>
    </div>
  </div>
</template>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-align: left;
  height: 100%;
  width: 100%;
  padding: 18px;
}
.home-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
.home-heading {
  margin-left: 1rem;
}

.warrningBox {
  margin-bottom: 30px;
}
</style>