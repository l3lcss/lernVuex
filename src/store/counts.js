const state = {
  count: 0
}
const mutations = {
  INCREMENT (state, payload) {
    state.count += payload
  },
  DECREMENT (state, payload) {
    state.count -= payload
  }
}
const actions = {
  increment: ({ commit }, amount) => commit('INCREMENT', amount),
  decrement: ({ commit }, amount) => commit('DECREMENT', amount)
}
const getters = {
  getCounter: state => state.count
}
export default {
  state,
  getters,
  mutations,
  actions
}
