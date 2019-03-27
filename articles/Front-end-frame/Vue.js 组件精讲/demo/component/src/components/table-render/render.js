export default {
  function:true,
  props:{
    row:Object,
    column:Object,
    index:Number,
    render:Function
  },
  render:(h,ctx)=>{
    const params = {
      row:ctx.props.row,
      column:ctx.props.column,
      index:ctx.props.index
    }
  }
}