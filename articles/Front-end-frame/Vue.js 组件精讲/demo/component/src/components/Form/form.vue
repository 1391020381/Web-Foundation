<template>
  <form>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "iForm",
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      field: []
    };
  },
  created() {
    this.$on("on-form-item-add", field => {
      if (field) this.field.push(field);
    });
    this.$on("on-form-item-remove", field => {
      if (field.prop) this.field.splice(this.field.indexOf(field), 1);
    });
  },
  mounted() {},
  methods: {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
