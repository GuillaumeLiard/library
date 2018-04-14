<template>
  <g class="pair">
    <node :cx="left.cx" :cy="left.cy" class="left"/>
    <node :cx="right.cx" :cy="right.cy" class="right"/>
  </g>
</template>

<script type="text/javascript">
  import node from "~/components/node"
  export default {
    components: {
      node
    },
    mounted() {
      // console.log(this);

    },
    computed: {
      // window: function() {
      //   return {
      //     width: window.innerWidth,
      //     height: window.innerHeight
      //   }
      // }
      left: function() {
        console.log('this3');
        this.abc();
        // console.log(window());
        // console.log(this.window());
        return {
          // cx: this.window.width / 3,
          cy: 200
        }
      },
      right: function() {
        return {
          cx: 500,
          cy: 200
        }
      }
    },
    methods: {
      window: function(){
        if (process.BROWSER_BUILD) {
          return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
          }
        } else {
          return {
            width: 100,
            height: 100
          }
        }
      },
      abc: function() {
        console.log(this.window());
      }
    }
  }
</script>

<style media="screen">
  .pair{
    /*transform: translateX(33.33%);*/

  }
  .left{
    /*transform: scaleX(2);*/

      /*transform: translateX(33.33%);*/
  }
  .right{
      /*transform: translateX(66.66%);*/
  }
</style>
