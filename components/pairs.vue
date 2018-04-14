<template>
  <svg class="pairs" viewbox="0 0 300 1000">
    <pair v-for="(pair, index) in pairs" :index="index" :pair="pair" :key="pair.id"/>
  </svg>
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
        },
        {
          id: 2,
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
  width: 100%;
  max-width: 1024px;
  height: auto;
  background-color: hsl(200, 50%, 30%);
}
</style>
