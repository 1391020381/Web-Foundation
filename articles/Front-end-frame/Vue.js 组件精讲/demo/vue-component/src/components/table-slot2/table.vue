<!--  -->
<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col,index) in columns"
            :key="index">
          {{col.title}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,rowIndex) in data"
          :key="rowIndex">
        <td v-for="(col,index) in columns"
            :key="index">
          <template v-if="'render' in col">
            <Render :row="row"
                    :column="col"
                    :index="rowIndex"
                    :render="col.render"></Render>
          </template>
          <template v-else-if="'slot' in col">
            <slot-scope :row="row"
                        :column="col"
                        :index="rowIndex"></slot-scope>
          </template>
          <template v-else>{{row[col.key]}}</template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Render from './render.js'
import SlotScope from './slot.js'
export default {
  data () {
    return {
    }
  },
  provide () {
    return {
      tableRoot: this
    }
  },
  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: { Render, SlotScope },
  computed: {},
  mounted () { },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
