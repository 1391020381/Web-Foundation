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
      // 自定义组件的 v-model
      //https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model
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
      this.dispatch("iFormItem", "on-form-blur", this.currentValue);
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
