<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { findComponenstDownward } from "../../utils/assist.js";
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
      currentValue: this.value,
      childrens: []
    };
  },
  created() {},
  mounted() {
    this.updateModel(true)
  },
  methods: {
    updateModel(update){
      this.childrens = findComponenstDownward(this,'iCheckbox')
      if(this.childrens){
        const { value } = this
        this.childrens.forEach(child => {
          child.model = value
          if(update){
            child.currentValue = value.indexOf(child.label) >=0
            child.group = true
          }
        });
      }
    },
    change(data){
      debugger
      this.currentValue = data
      this.$emit('input',data)
      this.$emit('on-change',data)
      this.dispatch('iFormItem','on-form-change',data)
    }
  },
  watch: {
    value(){
      this.updateModel(true)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
