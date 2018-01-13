<template>
  <div id="app">
    <el-badge class="item" :value="1" :max="9">
      <el-button @click="addComment" size="medium">评论</el-button>
    </el-badge>
    <el-badge class="item" disabled  is-dot :value="1" :max="9">
      <el-button type="primary">回复</el-button>
    </el-badge>
    <el-badge class="item" :value="num" :max="9">
      <el-button loading icon="el-icon-edit" type="primay" native-type="submit">点我</el-button>
    </el-badge>
  </div>
</template>

<script>
import ElBadge from '@/components/ElBadge'
import ElButton from '@/components/ElButton'
export default {
  name: 'app',
  data () {
    return {
      num: 6
    }
  },
  components: {
    ElBadge,
    ElButton
  },
  methods: {
    addComment(evt) {
      console.log('发表评论')
    }
  },
  mounted() {
    setTimeout(() => {
      this.num = 8
    }, 5000)
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
