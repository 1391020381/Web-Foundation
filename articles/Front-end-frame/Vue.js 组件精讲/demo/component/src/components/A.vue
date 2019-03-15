<template>
  <div class="">
    <button @click="handleClick">
      <B></B>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Emitter from "../mixins/emitter.js";
import B from "@/components/B.vue";
export default Vue.extend({
  name: "componentA",
  mixins: [Emitter],
  components: { B },
  mounted() {},
  methods: {
    handleClick() {
      debugger;
      this.broadcast("componentB", "on-message", "Hello Vue.js");
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
