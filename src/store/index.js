import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    count: 0
  },

  mutations: {
    incrementCounter (state, payload) {
      state.count += payload
    },
    decrementCounter (state, payload) {
      state.count -= payload
    }
  },

  actions: {
    incrementAction ({commit}, payload) {
      commit('incrementCounter', payload)
    },
    decrementAction ({commit}, payload) {
      commit('decrementCounter', payload)
    }
  },

  getters: {
    counter (state) {
      return state.count
    }
  }
})
