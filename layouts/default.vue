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
      <signup
        :show-sign-up="showSignUp"
        @hideSignUp="showSignUp = !showSignUp"
      ></signup>
    </header>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showSignUp: false,
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
  },
  methods: {
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
