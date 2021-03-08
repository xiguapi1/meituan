<template>
  <div id="app" v-cloak>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/views/view/header"
export default {
  components:{
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
*{
  margin:0;
  padding: 0;
}
body,html{
  height: 100%;
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
[v-cloak]{
  display: none;
}
</style>
