<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/scss">
  @import "style/common";
  @import "style/func";

  *{margin: 0;padding: 0;}
  html,body,#app {
    width: 100%;
    height: 100%;
  }
</style>
