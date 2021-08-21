<template>
  <div>
    <div class="hero tw-pt-32">
      <div class="tw-max-w-screen-xl tw-mx-auto">
        <div class="tw-container tw-mx-auto tw-p-4">
          <div class="tw-min-h-screen">hi from index</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
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
<style lang="scss" scoped>
.hero {
  background-image: url('/images/pastel-bg.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
