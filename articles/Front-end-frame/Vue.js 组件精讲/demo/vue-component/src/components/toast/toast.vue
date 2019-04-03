<!-- toast -->
<template>
  <div class="gulu-toast"
       :class="toastClasses">
    <div class="toast"
         ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else
             v-html="$slots.default[0]"></div>
      </div>
      <div class="line"
           ref="line"></div>
      <span class="close"
            v-if="closeButton"
            @click="onClickClose">
        {{closeButton.text}}
      </span>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Toast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator (value) {
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default () {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
    }
  },
  components: {},
  computed: {
    toastClasses () {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  mounted () { },
  methods: {
    updateStyle () {
      this.$nextTick(() => {
        this.$refs.line.style.height = `
         ${this.$refs.toast.getBoundingClientRect().height}px
         `
      })
    },
    execAutoClose () {
      if (this.autoClose) {
        setTimeout(() => { }, this.autoClose * 1000)
      }
    },
    close () { },
    onClickClose () { }
  }
}

</script>
<style lang='scss' scoped>
</style>
