<template>
  <svg class="pairs" viewbox="0 0 300 1000">
    <pair v-for="(pair, index) in pairs" :index="index" :pair="pair" :key="pair.id"/>
  </svg>
</template>

<script>

import pair from '~/components/pair';

export default {
  props: ['pairs'],
  components: {
    pair
  }
}

</script>

<style>

.pairs {
  width: 100%;
  max-width: 1024px;
  height: auto;
  background-color: hsl(200, 50%, 30%);
}
</style>
