<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  inject: ["name", "app"],
  mounted() {
    console.log("inject-name:", this.name, this.app);
    this.$on("test", text => {
      console.log("HelloWorld");
      window.alert(text);
    });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
