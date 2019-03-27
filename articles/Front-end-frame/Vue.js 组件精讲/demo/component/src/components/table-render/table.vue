<!-- table-render/table.vue -->
<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key">{{col.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row[col.key]">
        <td v-for="col in columns" :key="row[col.key]">{{row[col.key]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props:{
    columns:{
      type:Array,
      default(){
        retrun []
      }
    },
    data:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      testColumns:[
        {
          title:'姓名',
          key:'name'
        },
        {
          title:'年龄',
          key:'age'
        }
      ],
      testData:[
        {
          name:'王小明',
          age:18
        },
        {
          name:'张小刚',
          age:25
        }
      ]
    }
  },
  components: {},
  computed: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='scss' scoped>
 table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
  }
  table th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
  table td, table th{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
</style>