<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">MS Studio<br>Michał Stepanko</h1>
    <h3>
      Przepraszamy, ale strona znajduje się jeszcze w budowie.  
    </h3>
    <br>
    <h3>
      Kontakt telefoniczny - <a href="tel:691 806 875" class="boldLink">691 806 875</a>
    </h3>
    <h3>
      Kontakt mailowy - <a href=mailto:“kontakt@ms-studio.pl” class="boldLink">kontakt@ms-studio.pl</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.boldLink {
  font-weight: 700;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
