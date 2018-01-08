<template>
  <form class="input-area">
    <label>用户名：</label>
    <input ref="input" v-bind:value="value" placeholder="请输入用户名" class="user"></input>
    <label>评论：</label>
    <textarea ref="content" v-bind:value="value" placeholder="请输入内容" class="textarea"></textarea>
    <button type="button" @click="Submit">提交</button>
  </form>
</template>
<script>
  export default {
    props: ['value'],
    data() {
      return {
        username: '',
        content: ''
      }
    },
    methods: {
      Submit() {
        let bit = 6;
        let account = Math.random().toFixed(bit)*Math.pow(10, bit);
        console.log(account);
        var time = new Date().toLocaleString()
        let user = this.$refs.input.value
        let content = this.$refs.content.value
        let span = '';
        console.log("content: ", account + span + time + span + user + ': ' + content);
        this.$emit("transferComment", account + span + time + span + user + ': ' + content);
        this.$refs.content.value = ''
      }
    }
  }
</script>
<style>
.input-area {
  color: #000;
  font-size: 15px;
  margin: 10px auto;
  width: 300px;
}
.input-area .user {
  border: 1px solid blue;
  width: 100px;
  display: block;
  margin-bottom: 10px;
}
.input-area .textarea {
  border: 1px solid blue;
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: 10px;
}
</style>
