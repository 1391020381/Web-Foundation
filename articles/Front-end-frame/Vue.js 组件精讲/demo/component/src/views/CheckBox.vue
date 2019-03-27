<!-- CheckBox -->
<template>
  <div class="check-box">
    <checkBox v-model="checkBox"
              :trueValue="true">单独选项</checkBox>
    <br>
    数据：{{ checkBox }}
    <br><br />

    <checkBox-group v-model="multiple">
      <checkBox label="option1">选项 1</checkBox>
      <checkBox label="option2">选项 2</checkBox>
      <checkBox label="option3">选项 3</checkBox>
      <checkBox label="option4">选项 4</checkBox>
    </checkBox-group>
       <br>
        数据：{{ multiple }}
  </div>
</template>

<script>
import CheckBox from '../components/checkbox/checkbox'
import CheckBoxGroup from '../components/checkbox/checkbox-group'
export default {
  data () {
    return {
      checkBox: false,
      multiple: ['option1']
    }
  },
  components: {
    CheckBox,
    CheckBoxGroup
  },
  computed: {},
  mounted () { },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>