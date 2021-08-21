<template>
  <div>
    <div class="hero tw-pt-32 tw-min-h-screen">
      <div class="tw-max-w-screen-xl tw-mx-auto">
        <div class="tw-container tw-mx-auto tw-p-4">
          <div class="tw-py-6 tw-text-center">
            <div
              class="
                tw-max-w-lg
                sm:tw-max-w-3xl
                tw-mx-auto tw-p-2
                sm:tw-p-12
                image_container
                tw-h-[300px]
                sm:tw-h-[640px]
                tw-rounded-3xl tw-overflow-hidden
              "
            >
              <v-img
                v-if="cats.length > 0 && currentImage % 2 === 0"
                key="0"
                transition="fab-transition"
                class="
                  tw-w-full
                  tw-h-full
                  tw-object-cover
                  tw-object-center
                  tw-rounded-2xl
                "
                :src="cats[currentImage].url"
                @load="imageLoaded"
              ></v-img>
              <v-img
                v-if="cats && currentImage % 2 === 1"
                key="1"
                transition="scroll-x-transition"
                class="
                  tw-w-full
                  tw-h-full
                  tw-object-cover
                  tw-object-center
                  tw-rounded-2xl
                "
                :src="cats[currentImage].url"
                @load="imageLoaded"
              ></v-img>
            </div>
            <v-btn
              x-large
              dark
              color="accent"
              :loading="imageLoading"
              class="tw-mt-4"
              @click="changeImage"
              >Next Kitty</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
  data() {
    return {
      currentImage: 0,
      imageLoading: false,
    }
  },
  computed: {
    cats() {
      return this.$store.getters['cat/getCats']
    },
  },
  mounted() {
    this.fetchCats()
  },
  methods: {
    changeImage() {
      this.currentImage++
      this.imageLoading = true
      if (this.cats.length - 3 === this.currentImage) this.fetchCats()
    },
    async fetchCats() {
      try {
        await this.$store.dispatch('cat/fetchCats')
      } catch (error) {
        console.error(error.response)
      }
    },
    imageLoaded() {
      this.imageLoading = false
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
.image_container {
  background-color: rgba($color: white, $alpha: 0.2);
  backdrop-filter: blur(5px);
}
</style>
