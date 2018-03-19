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
                value: 'apple'
              },
              {
                id: 2,
                group: 'english',
                value: 'pear'
              },
              {
                id: 3,
                group: 'english',
                value: 'peach'
              },
              {
                id: 4,
                group: 'french',
                value: 'pomme'
              },
              {
                id: 5,
                group: 'french',
                value: 'poire'
              },
              {
                id: 6,
                group: 'french',
                value: 'pêche'
              }
            ],
            links: [
              {
                id: 1,
                source: 1,
                target: 4
              },
              {
                id: 2,
                source: 2,
                target: 5
              },
              {
                id: 3,
                source: 3,
                target: 6
              }
            ]
          }
        }
      ]
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
