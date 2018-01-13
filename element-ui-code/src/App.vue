<template>
  <div id="app">
    <el-rate 
    v-model="value1"
    @change="onRateChange"></el-rate>
    <el-rate 
    disabled
    v-model="value2"></el-rate>
    <el-rate 
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
    v-model="value3"></el-rate>
    <el-rate 
    showText
    v-model="value4"></el-rate>
  </div>
</template>

<script>
import ElRate from '@/components/ElRate'

export default {
  name: 'app',
  data () {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: 4
    }
  },
  components: {
    ElRate
  },
  methods: {
    onRateChange (value) {
      console.log('值选中了'+value)
    }
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
