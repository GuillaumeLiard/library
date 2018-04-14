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
  import node from "~/components/node"
  export default {
    props: ['pair', 'index', 'layout'],
    components: {
      node
    },
    computed: {
      nodes: function() {
        return this.pair.nodes
      },
      left: function() {
        return {
          cx: this.layout.gutter + this.layout.r,
          cy: this.layout.gutter + this.layout.r + this.index * (this.layout.gutter + 2 * this.layout.r),
          r: this.layout.r
        }
      },
      right: function() {
        return {
          cx: 2 * this.layout.gutter + 3 * this.layout.r,
          cy: this.layout.gutter + this.layout.r + this.index * (this.layout.gutter + 2 * this.layout.r),
          r: this.layout.r
        }
      }
    },
  }
</script>
