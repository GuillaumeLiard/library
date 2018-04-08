<template>
  <g class="">
    <g v-for="node in nodes" :key="node.id">
      <node/>
    </g>
  </g>

</template>

<script>
import node from '~/components/node';
import pair from '~/components/pair';

// <li v-for="node in nodes">
// {{ node.name }}
// <!-- <node :options="node" :net-links="links" :options="options" /> -->
// </li>
export default {

  components: {
    node,
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
