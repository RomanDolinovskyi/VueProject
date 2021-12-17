<template>
  <div id="app">
    <HeaderComponent />
    <div id="application">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";

const { mapActions } = createNamespacedHelpers("auth");

export default {
  name: "app",
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    ...mapActions(["initialize"])
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  #application {
    min-height: 94vh;
    width: 100%;
    margin: 0;
    padding: 0;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  text-decoration: none;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
  margin-top: -5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(96, 96, 96);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #505050;
}
</style>
