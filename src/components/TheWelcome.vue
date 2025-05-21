<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Oszczędzamy Twój czas tworząc zabudowania meblowe
na miarę Twoich potrzeb i możliwości.</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Przygotowujemy wysokiej jakości wizualizacje i projekty
z wykorzystaniem programu CAD.</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Uwzględniamy tradycyjne wzornictwo lub sięgamy po najnowsze
trendy i rozwiązania w branży meblowej.</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Uwzględniamy Twoje indywidualne upodobania z uwzględnieniem
stylu, wykorzystywanych materiałów, kolorystyki.</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Korzystamy ze sprawdzonych materiałów i akcesoriów.</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Współpracujemy ze sprawdzonymi, doświadczonymi w branży
wykonawcami.</template>
  </WelcomeItem>
</template>
