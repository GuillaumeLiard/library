<template>
  <circle
    :cx="cx"
    :cy="cy"
    r="100"
  ></circle>
</template>

<script type="text/javascript">
  export default {
    data: function () {
      return {
        cx: 0,
        cy: 0
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
