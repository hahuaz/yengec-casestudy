const resource = '/catapi/'
export default ($axios) => ({
  get({ query } = { query: '' }) {
    return $axios.$get(`${resource}${query}`)
  },

  getOne(id) {
    return $axios.$get(`${resource}/${id}`)
  },

  create(payload) {
    return $axios.$post(`${resource}`, payload)
  },

  update(id, payload) {
    return $axios.$post(`${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`${resource}/${id}`)
  },
})
