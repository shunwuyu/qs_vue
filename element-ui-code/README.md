# element-ui 源码分析

## rate 评分组件

  围绕icon出现  :class="[classes[item-1]]"
  this.$emit('input', 0); 这个emit 会将prop绑定v-model,
  不用传递事件

  disabled

  click -> emit -> watch value -> currentValue -> 样式

  mousemove 事件  $event 引用到事件
  mouseleave  让currentValue 回到原来的值

  :colors="['#99A9BF', '#F7BA2A', '#FF9900']" 不同等级支持不同的颜色

  emit change 方法可以触发父ViewModel的onChildChange

  text  v-if   computed 根据value 来计算。 预设prop数组