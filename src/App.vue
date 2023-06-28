<template>
  <div id="container">
    <a-alert v-if="pxerror != ''" :message="pxerror" type="error" show-icon />

    <router-view />
  </div>
</template>
<script >
export default {
  data() {
    return {
      artikelnr: this.$route.query.artikelnr,
      fullpath: this.$route.fullPath,
      bestand: [],
    };
  },
  components: {},
  computed: {
    pxerror() {
      return this.$store.getters.getPxError;
    },
  },
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%; /* needed for container min-height */
}
div#container {
  height: 100%;
  width: 100%;
  /*height:auto !important;  real browsers */
  height: 100%; /* IE6: treaded as min-height*/
  min-height: 100%; /* real browsers */
  margin: 0 auto;
  min-height: 100%;
  overflow: hidden;
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>