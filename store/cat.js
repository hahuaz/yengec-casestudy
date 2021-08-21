export const state = () => ({
  cats: null,
})

export const getters = {
  getCat(state) {
    return state.cats?.[0]
  },
}

export const actions = {
  async fetchCats({ commit }) {
    try {
      const data = await this.$repositories.cat.get()
      commit('SET_CATS', data)
    } catch (error) {
      console.error(error)
      throw new Error("Couldn't fetch cat!")
    }
  },
}

export const mutations = {
  SET_CATS(state, payload) {
    state.cats = payload
  },
}
