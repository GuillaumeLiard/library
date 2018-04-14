<template>
  <pairs :pairs="pairs"/>
</template>

<script>

import pairs from '~/components/pairs';

export default {

  components: {
    pairs
  },
  computed : {
    nodes () {
      return this.$store.state.topologies[0].example.nodes
    },
    links () {
      return this.$store.state.topologies[0].example.links
    },
    pairs () {
      return this.links.map((link) => {
        return {
          link,
          nodes: [
            this.nodes.filter((node) => node.id === link.sid)[0],
            this.nodes.filter((node) => node.id === link.tid)[0]
          ]
        }
      })
    }
  }
}

</script>
