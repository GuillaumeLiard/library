<template>
  <svg class="pairs" :viewBox="vb">
    <pair v-for="(pair, index) in pairs" :layout="layout" :index="index" :pair="pair" :key="pair.id"/>
  </svg>
</template>

<script>

const WIDTH = 300;
const PHI = 1.618;
const R = (WIDTH / PHI ) / 4;
const GUTTER = (WIDTH - 4 * R) / 3;

import pair from '~/components/pair';

export default {
  props: ['pairs'],
  components: {
    pair
  },
  data() {
    return {
      layout: {
        gutter: GUTTER,
        r: R
      }
    }
  },
  computed: {
    nb() {
      return this.pairs.length
    },
    vbHeight(){
      return this.nb * (this.layout.gutter + 2 * this.layout.r) + this.layout.gutter
    },
    vb(){
      return "0 0 300 " + this.vbHeight
    }
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
