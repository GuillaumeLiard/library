<template>
  <g>
    <node/>

  </g>
</template>

<script type="text/javascript">
  import node from "~/components/node"
  export default {
    components: {
      node
    }
    // computed : {
    //   nodes () {
    //     return this.$store.state.topologies[0].example.nodes
    //   },
    //   links () {
    //     return this.$store.state.topologies[0].example.links
    //   },
    //   options () {
    //     return {}
    //   }
    // }
  }
</script>

<style media="screen">
</style>
