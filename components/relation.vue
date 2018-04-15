<template>
  <g class="relation">
    <path :d="position"
    />
  </g>
</template>

<script type="text/javascript">
  export default {
    props: ['relation'],
    computed: {
      position: function() {
        return `
          M ${this.relation.startX} ${this.relation.startY}
          L ${this.relation.endX} ${this.relation.endY}
        `
      }
    }
  }
</script>

<style media="screen">
  .relation {
    /*stroke: hsl(120, 20%, 30%);*/
    stroke: hsl(240, 20%, 30%);
  }
</style>
