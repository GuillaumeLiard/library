<template>
  <g class="relation">
    <path :d="relationPath"
    />
  </g>
</template>

<script type="text/javascript">
  const arrowSize = 5;
  export default {
    props: ['startX', 'startY', 'startArrow', 'endX', 'endY', 'endArrow'],
    computed: {
      startArrowPath: function() {
        return `
          M ${this.startX} ${this.startY}
          L ${this.startX + arrowSize} ${this.startY - arrowSize}
          V ${this.startY + arrowSize}
          Z
        `
      },
      endArrowPath: function() {
        return `
          M ${this.endX} ${this.endY}
          L ${this.endX - arrowSize} ${this.endY + arrowSize}
          V ${this.endY - arrowSize}
          Z
        `
      },
      dash: function() {
        return `
          M ${this.startX} ${this.startY}
          L ${this.endX} ${this.endY}
        `
      },
      relationPath: function() {
        console.log(typeof this.startArrow)
        console.log(this.startArrow ? 'oui' : 'non')
        return (this.startArrow ? this.startArrowPath : '') + this.dash + (this.endArrow ? this.endArrowPath : '')
      }
    }
  }
</script>

<style media="screen">
  .relation {
    stroke: hsl(240, 20%, 30%);
    fill: hsl(240, 20%, 30%);
  }
</style>
