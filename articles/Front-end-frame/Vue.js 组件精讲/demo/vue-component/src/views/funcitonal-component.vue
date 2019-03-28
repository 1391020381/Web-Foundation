<template>
  <div class="functional-component">
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
