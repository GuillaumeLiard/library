<template>
  <g v-on:click="add" class="node">
    <circle
      :cx="cx"
      :cy="cy"
      :r="r"
    ></circle>
    <g class="text">
      <text :x="text__position.x" :y="text__position.y">
        {{ name }}
      </text>
    </g>
  </g>
</template>

<script type="text/javascript">
  export default {
    props: ['cx', 'cy', 'r', 'name'],
    computed: {
      text__position: function() {
        return {
          x: this.cx,
          y: this.cy + 4
        }
      }
    },
    methods: {
      add() {
        this.$store.commit('add')
      }
    }
  }
</script>

<style media="screen">
  circle {
    fill: white;
    stroke: hsl(240, 20%, 30%);
  }

  .text {
    font-family:"Verdana";
    font-size: 16px;
    text-anchor: middle;
  }
</style>
