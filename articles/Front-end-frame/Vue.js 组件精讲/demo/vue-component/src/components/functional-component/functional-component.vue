<!--  -->
<template>
  <div>
    <Render :render="render"></Render>
  </div>
</template>

<script>
import Render from './render.js'
export default {
  props: {
    render: Function
  },
  data () {
    return {
    }
  },
  components: { Render },
  computed: {},
  mounted () { },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
