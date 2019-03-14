<template>
  <div class="">
    <button :class=" 'i-button-size' + size"
            :disabled="disabled">{{desc}}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

function oneOf(value: string, validList: any) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
export default Vue.extend({
  name: "customButton",
  props: {
    size: {
      validator: (value: string): boolean => {
        return oneOf(value, ["small", "large", "default"]);
      },
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    desc: {
      type: String,
      default: "主要"
    }
  },
  inject: ["name", "app"],
  mounted() {
    console.log("inject-name:", this.name, this.app);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
