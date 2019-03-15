<template>
  <div class="">
    B
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "componentB",
  mounted() {},
  created() {
    this.$on("on-message", this.showMessage);
  },
  methods: {
    showMessage(text) {
      window.alert(text);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
