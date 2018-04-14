<template>
  <g class="node">
    <circle
      :cx="cx"
      :cy="cy"
      :r="r"
    ></circle>
    <g class="text">
      <text class="text__content" :x="text__position.x" :y="text__position.y">
        {{ text }}
      </text>
    </g>
  </g>
</template>

<script type="text/javascript">
  export default {
    props: ['cx', 'cy', 'r'],
    data: function () {
      return {
        // cx: 0,
        // cy: 0,
        // r: 100,
        text: 'ABC'
      }
    },
    computed: {
      text__position: function() {
        console.log(this);
        return {
          x: this.cx,
          // x: 50,
          y: this.cy + 4
        }
      }
    }
  }
</script>

<style media="screen">
  circle {

    /*cx: 33.33vw;*/
    /*cy: calc(33.33vh - 50px);*/
    fill: white;
    stroke: hsl(240, 20%, 30%);;
  }

  .text {
    font-family:"Verdana";
    font-size: 16px;
    text-anchor: middle;

    /*will-change: transform;
    transform: translate(-50%, 50%);*/
    /*transform: matrix(1,0,0,1,50,200);*/
  }
  .text__content {

  }
</style>
