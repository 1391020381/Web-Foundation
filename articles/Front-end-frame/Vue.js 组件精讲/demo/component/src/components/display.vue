<!-- display.vue -->
<template>
  <div ref="display"></div>
</template>

<script>
export default {
  props:{
    code:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      html:'',
      js:'',
      css:''
    }
  },
  components: {},
  computed: {},
  mounted(){},
  methods: {
    getSource(source,type){
     const regex = new RegExp(`<${type}[^>]*>`)
     let openingTag = source.match(regex)
     if(!openingTag) return '';
     else openingTag = openingTag[0]
    },
    splitCode(){

    }
  }
}

</script>
<style lang='scss' scoped>
</style>