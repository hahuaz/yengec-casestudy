const resource = '/placeholderapi/'
export default ($axios) => ({
  get() {
    return $axios.$get(`${resource}`)
  },

  getOne(id) {
    return $axios.$get(`${resource}/${id}`)
  },

  create(payload) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve($axios.$post(`${resource}/users`, payload))
      }, 1000)
    })
  },

  update(id, payload) {
    return $axios.$post(`${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`${resource}/${id}`)
  },
})
