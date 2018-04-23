import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      topologies: [
        {
          type: 'vocabulary',
          example: {
            nodes: [
              {
                id: 1,
                group: 'english',
                name: 'apple'
              },
              {
                id: 2,
                group: 'english',
                name: 'pear'
              },
              {
                id: 3,
                group: 'english',
                name: 'peach'
              },
              {
                id: 4,
                group: 'french',
                name: 'pomme'
              },
              {
                id: 5,
                group: 'french',
                name: 'poire'
              },
              {
                id: 6,
                group: 'french',
                name: 'pêche'
              }
            ],
            links: [
              {
                id: 1,
                sid: 1,
                tid: 4
              },
              {
                id: 2,
                sid: 2,
                tid: 5
              },
              {
                id: 3,
                sid: 3,
                tid: 6
              }
            ]
          }
        }
      ]
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      add(state) {
        state.topologies[0].example.links.push({
          id: 3,
          sid: 3,
          tid: 6
        })
      }
    }
  })
}

export default createStore
