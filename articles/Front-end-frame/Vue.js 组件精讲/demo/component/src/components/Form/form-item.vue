<template>
  <div>
    <label v-if="label">{{label}}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Emitter from "../../mixins/emitter.js";
import AsyncValidator from "async-validator";
import { error } from "util";
export default Vue.extend({
  name: "iFormItem",
  mixins: [Emitter],
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      validateSate: "", // 校验状态
      validateMessage: "" // 校验不通过时的提示信息
    };
  },
  mounted() {
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
      this.setRules();
    }
  },
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    }
  },
  methods: {
    setRules() {
      this.$on("on-form-blur", this.onFieldBlur);
      this.$on("on-form-change", this.onFieldChange);
    },
    getRules() {
      let formRule = this.form.rules;
      formRule = formRule ? formRule[this.prop] : [];
      return [].concat(formRule || []);
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(rule => {
        !rule.trigger || rule.trigger.indexOf(trigger) !== 1;
      });
    },
    validate(trigger, callback = function() {}) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        return true;
      }
      this.validateSate = "validating";
      let descriptor = {};
      descriptor[this.prop] = rules;
      const validator = new AsyncValidator(descriptor);
      let model = {};
      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, errors => {
        this.validateSate = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";
        callback(this.validateMessage);
      });
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
