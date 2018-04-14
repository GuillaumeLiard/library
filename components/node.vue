<template>
  <g class="node">
    <circle
      :cx="cx"
      :cy="cy"
      :r="r"
    ></circle>
    <text x="0" y="0" font-family="Verdana" font-size="35">
      {Hello, out there}
    </text>
  </g>
</template>

<script type="text/javascript">
  export default {
    props: ['cx', 'cy'],
    data: function () {
      return {
        // cx: 0,
        // cy: 0,
        r: 100
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
</style>
