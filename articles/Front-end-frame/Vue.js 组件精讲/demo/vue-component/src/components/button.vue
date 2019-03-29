<!-- button -->
<template>
  <component :is="tagName"
             v-bind="tagProps">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_self'
    }
  },
  data () {
    return {
    }
  },
  components: {},
  computed: {
    tagName () {
      return this.to === '' ? 'button' : 'a'
    },
    tagProps () {
      let props = {}
      if (this.to) {
        props = {
          target: this.target,
          href: this.to
        }
      }
      return props
    }
  },
  mounted () { },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
