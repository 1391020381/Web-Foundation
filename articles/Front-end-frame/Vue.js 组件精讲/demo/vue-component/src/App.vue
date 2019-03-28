<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"
                   >Home</router-link>
      <router-link to="/funcitonal-component"
                   >funcitonal-component</router-link>
      <router-link to="/table-render"
                   >table-render</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: left;
  a {
    display: block;
     height: 44px;
     line-height: 44px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
