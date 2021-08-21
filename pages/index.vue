<template>
  <div>
    hi from index
    <p @click="getPic">get pic</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this)
  },
  methods: {
    async getPic() {
      try {
        const pic = await this.$store.dispatch('cat/fetchCats')
        console.log(pic)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
