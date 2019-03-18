<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { findComponentDownward } from "../../utils/assist.js";
import Emitter from "../../mixins/emitter.js";
export default Vue.extend({
  name: "iCheckboxGroup",
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentValue: "",
      childrens: []
    };
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
