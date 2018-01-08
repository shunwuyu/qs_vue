<template>
  <div id="app">
    <comment></comment>
  </div>
</template>

<script>
import Comment from './components/Comment.vue'
export default {
  name: 'app',
  components: {
    'comment': Comment
  }
}
</script>

<style>
</style>
