<template>
  <div class="form">
    <h3>具有数据校验功能的表单组件-Form</h3>
    <i-form ref="form"
            :model="formValidate"
            :rules="ruleValidate">
      <i-form-item label="用户名"
                   prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱"
                   prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>

    <i-select v-bind:selected="selectValue"
              :selectData="selectData"
              v-on:change="selectValue = arguments[0]">
    </i-select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import iForm from "../components/Form/form.vue";
import iFormItem from "../components/Form/form-item.vue";
import iInput from "../components/Form/input.vue";
import iSelect from "../components/Form/select.vue";
export default Vue.extend({
  name: "customForm",
  components: {
    iForm,
    iFormItem,
    iInput,
    iSelect
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          {
            type: "email",
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ]
      },
      selectValue: "",
      selectData: [
        {
          value: "A",
          key: 1
        },
        {
          value: "B",
          key: 2
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert("提交成功");
        } else {
          window.alert("提交失败");
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    }
  }
});
</script>
