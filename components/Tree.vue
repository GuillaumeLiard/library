<template>
  <div class="content">
    <d3-network :net-nodes="nodes" :net-links="links" :options="options" />
  </div>
</template>

<script>
import D3Network from 'vue-d3-network'

export default {
  components: {
    D3Network
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

<style scoped src="vue-d3-network/dist/vue-d3-network.css">

  .content {

    width: 100%;
    height: 100%;

  }
</style>
