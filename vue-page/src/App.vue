<template>
  <div id="app">
    <!-- 页面ui 显示几个列表页 listen
      getPage 事件的页码发送给父组件， 向后台发送相关请求
     -->
    <page :total="total" :current-index="currentIndex"
    :listLen="listLen" @getPage="getPage">
    </page>
  </div>
</template>

<script>
import Page from './components/Page'

export default {
  name: 'app',
  data () {
    return {
      total: 13,
      currentIndex: 1,
      listLen: 5
    }
  },
  methods: {
    getPage(index) {
      console.log(index);
    }
  },
  components: {
    Page
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
