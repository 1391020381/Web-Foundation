<template>
  <input type="text"
         :value="currentValue"
         @input="handleInput"
         @blur="handleBlur" />
</template>

<script lang="ts">
import Vue from "vue";
import Emitter from "../../mixins/emitter.js";
export default Vue.extend({
  name: "iInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("iFormItem", "on-form-change", value);
    },
    handleBlur(event) {
      this.dispatch("iFormItem", "on-form0-blur", this.currentValue);
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
