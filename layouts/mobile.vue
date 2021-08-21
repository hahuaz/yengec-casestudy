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
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  display: grid;
  justify-content: flex-end;
  align-items: center;

  padding: 1rem;
}
</style>
