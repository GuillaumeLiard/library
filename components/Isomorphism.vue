<template>
  <pairs :pairs="pairs"/>
</template>

<script>

import pairs from '~/components/pairs';

export default {

  components: {
    pairs
  },
  computed : {
    nodes () {
      return this.$store.state.topologies[0].example.nodes
    },
    links () {
      return this.$store.state.topologies[0].example.links
    },
    pairs () {
      return this.links.map((link) => {
        return {
          link,
          nodes: [
            this.nodes.filter((node) => node.id === link.sid)[0],
            this.nodes.filter((node) => node.id === link.tid)[0]
          ]
        }
      })
    }
    // pairs() {
    //   return [
    //     {
    //       id: 1,
    //       nodes: [
    //         {
    //           id: 1,
    //           group: 'english',
    //           name: 'apple'
    //         },
    //         {
    //           id: 4,
    //           group: 'french',
    //           name: 'pomme'
    //         }
    //       ],
    //       link: {
    //         id: 1,
    //         sid: 1,
    //         tid: 4
    //       }
    //     },
    //     {
    //       id: 2,
    //       nodes: [
    //         {
    //           id: 1,
    //           group: 'english',
    //           name: 'apple'
    //         },
    //         {
    //           id: 4,
    //           group: 'french',
    //           name: 'pomme'
    //         }
    //       ],
    //       link: {
    //         id: 1,
    //         sid: 1,
    //         tid: 4
    //       }
    //     }
    //   ]
    // }
  }
}


</script>

<style>

.pairs {

  /*transform: scale(3);*/
}
</style>
