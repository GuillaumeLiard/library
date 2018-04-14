<template>
  <g class="pairs">
    <pair v-for="pair in pairs" :key="pair.id"/>
  </g>

</template>

<script>
// import node from '~/components/node';
import pair from '~/components/pair';

// <li v-for="node in nodes">
// {{ node.name }}
// <!-- <node :options="node" :net-links="links" :options="options" /> -->
// </li>
export default {

  components: {
    // node,
    pair
  },
  computed : {
    nodes () {
      return this.$store.state.topologies[0].example.nodes
    },
    links () {
      return this.$store.state.topologies[0].example.links
    },
    options () {
      return {}
    },
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

.content {

  width: 100%;
  height: 100%;

}
</style>
