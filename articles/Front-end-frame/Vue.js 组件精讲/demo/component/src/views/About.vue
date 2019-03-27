<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleOpen1">打开提示 1</button>
    <button @click="handleOpen2">打开提示 2</button>
    <table-render></table-render>
  </div>
</template>
<script>
 import TableRender from '../components/table-render/table-render.vue'
export default {
  components: {
     TableRender
  },
  methods: {
    handleOpen1 () {
      this.$Alert.info({
        content: '我是提示信息 1'
      });
    },
    handleOpen2 () {
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3
      });
    }
  }
}
</script>