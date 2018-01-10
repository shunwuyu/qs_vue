<template>
  <div id="app">
    <div>姓名：{{name}}</div>
    <img src="./assets/logo.png">
    <ul ref="movies">
      <li v-for="item in movies" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  data () {
    return {
      name: null,
      movies: []
    }
  },
  beforeCreate () {
    // 此时 dom 节点没有更新， 
    // dom 更新完成就会触发$nextTick方法
    this.$nextTick(() => {
      this.name = '旅梦开发团';
    })
  },
  mounted () {
    
    // this.$nextTick(() => {
      this.name = '喻顺武';
    // })
    fetch('https://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie#!method=get')
      .then(data => data.json())
      .then(result => {
        // console.log(result);
        this.movies = result.subjects;
        this.$nextTick(() => {
          this.$refs.movies.getElementsByTagName('li')[0].style.color = 'red';
        });
      })

  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
