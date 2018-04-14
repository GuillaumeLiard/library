<template>
  <g class="pairs">
    <pair v-for="pair in pairs" :key="pair.id"/>
  </g>
</template>

<script>
// import node from '~/components/node';
import pair from '~/components/pair';

export default {

  components: {
    pair
  },
  computed : {
    pairs() {
      return [
        {
          id: 1,
          nodes: [
            {
              id: 1,
              group: 'english',
              name: 'apple'
            },
            {
              id: 4,
              group: 'french',
              name: 'pomme'
            }
          ],
          link: {
            id: 1,
            sid: 1,
            tid: 4
          }
        }
      ]
    }
  }
}


</script>

<style>

.pairs {

  transform: scale(3);
}
</style>
