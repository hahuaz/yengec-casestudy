export const state = () => ({
  cats: [],
})

export const getters = {
  getCats(state) {
    return state.cats
  },
}

export const actions = {
  async fetchCats({ commit }) {
    try {
      const data = await this.$repositories.cat.get({ query: '?limit=10' })
      commit('SET_CATS', data)
    } catch (error) {
      console.error(error)
      throw new Error("Couldn't fetch cat!")
    }
  },
}

export const mutations = {
  SET_CATS(state, payload) {
    state.cats = [...state.cats, ...payload]
  },
}
