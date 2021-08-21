export const state = () => ({
  user: null,
})

export const getters = {
  getUser(state) {
    return state.user
  },
}

export const actions = {
  async signUp({ commit }, payload) {
    try {
      const data = await this.$repositories.user.create(payload)
      commit('SET_USER', data)
    } catch (error) {
      console.error(error)
      throw new Error("Couldn't get user!")
    }
  },
}

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
}
