<template>
  <v-app>
    <header class="header">
      <v-menu v-if="user" bottom offset-y>
        <template #activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" large v-on="on">
            <v-icon class="tw-mr-1">mdi-account</v-icon>
            {{ user.username }}
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item>
            <v-list-item-title class="tw-cursor-pointer" @click="logout"
              >Logout</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        v-if="!user"
        large
        dark
        color="primary"
        class="tw-text-white"
        @click="showSignUp = true"
      >
        <v-icon class="tw-mr-1">mdi-account</v-icon>
        Sign Up
      </v-btn>
      <v-dialog
        v-model="showSignUp"
        width="500"
        content-class="tw-bg-gray-50 tw-py-12 tw-px-4"
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
    </header>
    <Nuxt />
    <footer>hello from footer {{ user }}</footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showSignUp: false,
      signupLoading: false,
      btnStatus: 'secondary',
      username: null,
      password: null,
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
  },
  methods: {
    async signUp() {
      this.signupLoading = true
      try {
        await this.$store.dispatch('user/signUp', {
          username: this.username,
          password: this.password,
        })
        this.showSignUp = false
      } catch (error) {
        /* TODO give info about error to user */
        console.error(error)
        this.btnStatus = 'error'
      }
      this.signupLoading = false
    },
    logout() {
      this.$store.commit('user/SET_USER', null)
      this.$router.go('/')
    },
  },
}
</script>
<style lang="scss"></style>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  display: grid;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2.3rem;
  padding: 1rem 3rem;
  backdrop-filter: blur(2px);
  background-color: rgba($color: white, $alpha: 0.2);
}
</style>
