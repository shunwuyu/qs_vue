# nextTick
  vue是数据驱动视图更新的， 是异步的。
  修改某一数据dom是不更新的， 而是等到所有数据都获取后统一更新视图，dom完成更新就会触发$nextTick()这个方法。

  1 生命周期， created() 没有获得节点， 没有渲染， mounted就不会有问题， 所以用$nextTick()
  
  2 v-if 无法马上获得要显示的节点， 用nextTick 


