<!-- tree 用于接受和处理数据,并将数据传递给 node.vue-->
<template>
  <div>
    <tree-node v-for="(item,index) in cloneData"
               :key="index"
               :data="item"
               :show-checkbox="showCheckbox">
    </tree-node>
  </div>
</template>

<script>
import TreeNode from './node.vue'
import { deepCopy } from '../../utils/assist.js'
export default {
  name: 'Tree',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  components: { TreeNode },
  computed: {},
  mounted () { },
  methods: {
    rebuildData () {
      this.cloneData = deepCopy(this.data)
    }
  },
  watch: {
    data () {
      this.rebuildData()
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
