<template>
  <g class="pair">
    <node class="left"/>
    <node class="right"/>
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
  .left{
    transform: translateX(33.33%);
  }
  .right{
    left: 66.66%;
  }
</style>
