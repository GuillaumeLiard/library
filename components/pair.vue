<template>
  <g class="pair">
    <node
      v-for="(node, index) in pair.nodes"
      v-if="index%2"
      :cx="left.cx"
      :cy="left.cy"
      :r="left.r"
      :key="node.id"
    />
    <node
      v-for="(node, index) in pair.nodes"
      v-if="!index%2"
      :cx="right.cx"
      :cy="right.cy"
      :r="right.r"
      :key="node.id"
    />
  </g>
</template>

<script type="text/javascript">
// <node :cx="left.cx" :cy="left.cy" :r="left.r" class="left"/>
// <node :cx="right.cx" :cy="right.cy" :r="right.r" class="right"/>
  const WIDTH = 300;
  const PHI = 1.618;
  const R = (WIDTH / PHI ) / 4;
  const GUTTER = (WIDTH - 4 * R) / 3;

  import node from "~/components/node"
  export default {
    props: ['pair', 'index'],
    components: {
      node
    },
    mounted() {
      // console.log(this);
      // console.log(this.window());
      // alert('mounted');
      // this.$forceUpdate();

    },
    computed: {
      // odd: function(index) {
      //   return index%2
      // },
      nodes: function() {
        return this.pair.nodes
      },
      left: function() {
        return {
          cx: GUTTER + R,
          // cx: this.window().width / 3,
          cy: GUTTER + R + this.index * (GUTTER + 2 * R),
          r: R
        }
      },
      right: function() {
        return {
          cx: 2 * GUTTER + 3 * R,
          // cx: 2 * this.window().width / 3,
          cy: GUTTER + R + this.index * (GUTTER + 2 * R),
          r: R
        }
      }
    },
    methods: {
      // window: function(){
      //   if (process.browser) {
      //     return {
      //       width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      //       height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      //     }
      //   } else {
      //     return {
      //       width: 100,
      //       height: 100
      //     }
      //   }
      // },
      // abc: function() {
      //   console.log(this.window());
      // }
    }
  }
</script>

<style media="screen">
  .pair{
    /*transform: translateX(33.33%);*/
    /*width: 100%;
    height: 100%;*/

  }
  .left{
    /*transform: scaleX(2);*/

      /*transform: translateX(33.33%);*/
  }
  .right{
      /*transform: translateX(66.66%);*/
  }
</style>
