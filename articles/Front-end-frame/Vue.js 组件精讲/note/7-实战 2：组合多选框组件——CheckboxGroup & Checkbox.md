- 因为 value 被定义为 prop 它只能由父级修改,本身不能修改的,在 <input> 触发 change 事件,也就是点击选择时,不能由 Checkbox 来修改这个 value,所以我们在 data 里定义了一个 currentValue,并把它绑定在 <input :checked="currentValue">
- 自定义事件events上文已经说了一个input,用于实现 v-model语法糖；另一个就是on-change 当选中/取消选中时触发,用于通知父级状态发生了变化。
