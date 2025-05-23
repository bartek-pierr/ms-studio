<template>
  <div class="offerCompanies">
    <h1>Oferta dla firm meblowych</h1>
    <span class="offerCompanies__section">
<h2>Z kim współpracujemy</h2>
    <ul>
      <li>ze studiami kuchennymi</li>
      <li>salonami meblowymi</li>
      <li>studiami projektowymi</li>
      <li>producentami mebli</li>
      <li>niezależnymi  wykonawcami</li>
    </ul>
    </span>
    <span class="offerCompanies__section">
<h2>Dopasowujemy usługi do Twoich potrzeb</h2>
    <p>Nadchodzi taki moment w działalności firm, że ilość czasu pracy, którą musimy poświęcić na sfinalizowanie zleceń nie pozwala na sprawną lub rzetelną obsługę nowych klientów.</p>
    <p>Dlatego MS STUDIO świadczy usługi w zakresie pierwszego kontaktu z klientem zainteresowanym ofertą Waszej firmy.</p>
    </span>
    <span class="offerCompanies__section">
<h2>Co oferujemy?</h2>
    <p>Umówimy się z klientem na wizytę i wykonamy pomiary we wskazanych pomieszczeniach, a rezultaty przekażemy w formie czytelnych zdjęć z wymiarowaniem.</p>
    <p>Przygotujemy wstępny projekt zabudowy lub wysokiej jakości wizualizację pomieszczenia w programach CAD lub PRO100.</p>
    <p>Dostarczymy specyfikację elementów meblowych i akcesoriów do zamówienia lub produkcji wg potrzeb i wymagań klienta</p>
    <p>Oszczędzimy Twój czas i energię, którą będziesz mógł spożytkować dla innych klientów co pozwoli Ci… zarobić więcej lub po prostu skorzystać z zasłużonej chwili spokoju i spędzić czas tak jak lubisz.</p>
    </span>
  </div>
</template>

<style scoped>
.offerCompanies__section {
  margin: 10px 0;
  display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
}

h1, h2 {
  color: #3c95b0;
  font-weight: 600;
}

h1 {
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  .offerCompanies {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
}
</style>