<template>
  <div>
    <label v-if="label"
           :class="{'i-form-item-label-required':isRequired}">{{label}}</label>
    <div>
      <slot></slot>
      <div v-if="validateSate ==='error'"
           class="i-form-message">{{validateMessage}}</div>
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
      isRequired: false, // 是否为必填
      validateSate: "", // 校验状态
      validateMessage: "" // 校验不通过时的提示信息
    };
  },
  mounted() {
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
      this.initialValue = this.fieldValue;
      this.setRules();
    }
  },
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  },
  computed: {
    fieldValue() {
      //  fieldValue这个表单需要校验的字段
      return this.form.model[this.prop];
    }
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length) {
        rules.every(rule => {
          this.isRequired = rule.required;
        });
      }
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
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
      // return rules.filter(
      //   rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      // );
    },
    resetFields() {
      this.validateSate = "";
      this.validateMessage = "";
      this.form.model[this.prop] = this.initialValue;
    },
    validate(trigger, callback = function(validateMessage) {}) {
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
.i-form-item-label-required::before {
  content: "*";
  color: red;
}
.i-form-item-message {
  color: red;
}
</style>
