<template>
  <g class="node">
    <circle
      :cx="cx"
      :cy="cy"
      :r="r"
    ></circle>
    <g class="text">
      <text class="text__content" :x="cx" :y="cy" font-family="Verdana" font-size="35">
        {{ text }}
      </text>
    </g>
  </g>
</template>

<script type="text/javascript">
  export default {
    props: ['cx', 'cy'],
    data: function () {
      return {
        // cx: 0,
        // cy: 0,
        r: 100,
        text: 'ABC'
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

    will-change: transform;
    transform: translate(-50%, 50%);
  }
  .text__content {

  }
</style>
