import { createStore } from 'vuex'

export default createStore({
  state: {
    moveRight: 0
  },
  getters: {
  },
  mutations: {
    changeMoveRight(state, data:number) {
      state.moveRight = data
    }
  },
  actions: {
  },
  modules: {
  }
})
