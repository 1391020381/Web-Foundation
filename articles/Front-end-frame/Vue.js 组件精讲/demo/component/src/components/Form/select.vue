<template>
  <select @change="emitChange($event.target.value)">
    <template v-for="(item,key) in selectData">
      <option :value="item.value"
              :key="key">{{item.value}}</option>
    </template>
  </select>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "iSelect",
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    selectData: {
      type: Array
    },
    selected: {
      type: [String, Number]
    }
  },
  data() {
    return {};
  },
  methods: {
    emitChange(value) {
      this.$emit("change", value);
    }
  },
  watch: {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
