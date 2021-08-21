<template>
  <div>
    <v-dialog
      :value="showSignUp"
      width="500"
      content-class="tw-bg-gray-50 tw-py-12 tw-px-4"
      @click:outside="$emit('hideSignUp')"
    >
      <div class="tw-max-w-xs mx-auto tw-text-center tw-space-y-6">
        <h1
          class="
            tw-text-xl
            tw-font-semibold
            tw-bg-gray-200
            tw-p-4
            tw-rounded-lg
            tw-inline-block
            tw-mb-6
          "
        >
          Access all the
          <span class="tw-bg-accent tw-rounded-md tw-inline-block tw-p-1"
            >good stuff</span
          >
        </h1>
        <div>
          <v-text-field
            v-model="username"
            autofocus
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>
        </div>
        <v-btn
          block
          x-large
          :color="btnStatus"
          rounded
          :loading="signupLoading"
          @click="signUp"
          >Sign Up</v-btn
        >
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showSignUp: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      signupLoading: false,
      btnStatus: 'secondary',
      username: null,
      password: null,
    }
  },
  methods: {
    async signUp() {
      this.signupLoading = true
      try {
        await this.$store.dispatch('user/signUp', {
          username: this.username,
          password: this.password,
        })
        this.$emit('hideSignUp')
      } catch (error) {
        /* TODO give info about error to user */
        console.error(error)
        this.btnStatus = 'error'
      }
      this.signupLoading = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
