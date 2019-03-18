<template>
  <label>
    <span>
      <input v-if="group"
             type="checkbox"
             :disabled="disabled"
             :value="label"
             v-model="model"
             @change="change" />
      <input v-else
             type="checkbox"
             :disabled="disabled"
             :checked="currentValue"
             @chang="change" />
    </span>
    <slot></slot>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import { findComponentUpward } from "../../utils/assist.js";
import Emitter from "../../mixins/emitter.js";
export default Vue.extend({
  name: "iCheckbox",
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  created() {},
  mounted() {
    this.parent = findComponentUpward(this, "iCheckboxGroup");
    if (this.parent) {
      this.group = true;
    }
    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
    }
  },
  methods: {
    change(event) {
      if (this.disabled) {
        return false;
      }
      const checked = event.target.checked;
      this.currentValue = checked;
      const value = checked ? this.trueValue : this.falseValue;
      this.$emit("input", value);
      if (this.group) {
        this.parent.change(this.model);
      } else {
        this.$emit("on-change", value);
        this.dispatch("iFormItem", "on-form-change", "value");
      }
      // this.$emit("on-change", value);
      // this.dispatch("iFormItem", "on-form-change", value);
    },
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    }
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel();
      } else {
        throw "Value should be trueValue or faseValue";
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
