<!-- component -->
<template>
  <div>
    <i-button>普通按钮</i-button>
    <br>
    <i-button to="https://juejin.im">链接按钮</i-button>
    <br>
    <i-button to="https://juejin.im"
              target="_blank">新窗口打开链接按钮</i-button>
  </div>
</template>

<script>
import iButton from '../components/button'
export default {
  data () {
    return {
    }
  },
  components: { iButton },
  computed: {},
  mounted () {
    console.log('this:', this, '$el:', this.$el)
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
