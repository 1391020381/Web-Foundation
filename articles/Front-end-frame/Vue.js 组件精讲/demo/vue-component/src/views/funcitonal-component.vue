<template>
  <div class="functional-component">
    <h1>函数式组件</h1>
    <FunctionalComponent :render="render"></FunctionalComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import FunctionalComponent from '@/components/functional-component/functional-component.vue'

export default {
  name: 'functional-component',
  components: {
    FunctionalComponent
  },
  data () {
    return {
      render: (h) => {
        return h('div', {
          style: {
            color: 'red'
          }
        }, 'functional-component')
      }
    }
  }
}
</script>
