<template>
  <g class="pair">
    <node
      v-for="(node, index) in pair.nodes"
      v-if="index%2"
      :cx="left.cx"
      :cy="left.cy"
      :r="left.r"
      :name="node.name"
      :key="node.id"
    />
    <node
      v-for="(node, index) in pair.nodes"
      v-if="!index%2"
      :cx="right.cx"
      :cy="right.cy"
      :r="right.r"
      :name="node.name"
      :key="node.id"
    />
  </g>
</template>

<script type="text/javascript">
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
    computed: {
      nodes: function() {
        return this.pair.nodes
      },
      left: function() {
        return {
          cx: GUTTER + R,
          cy: GUTTER + R + this.index * (GUTTER + 2 * R),
          r: R
        }
      },
      right: function() {
        return {
          cx: 2 * GUTTER + 3 * R,
          cy: GUTTER + R + this.index * (GUTTER + 2 * R),
          r: R
        }
      }
    },
  }
</script>
