<template>
  <div class="commentlist">
    <comment-item v-for="item in List" v-bind:comment="item" v-bind:key="item.id"></comment-item>
    <div class="empty-msg" v-if="List.length==0">当前没有评论</div>
  </div>
</template>
<script>
import CommentItem from './CommentItem';

export default {
  name: 'commentlist',
  props: ['List'],
  data() {
    return {

    }
  },
  components: {
    'comment-item': CommentItem
  }
}  
</script>
<style>
.comment-list{
  background: #eee;
  color: #000;
  font-size: 15px;
  margin:10px;
  width: 300px;
  border:1px solid #eee;
  margin:10px auto;
}
</style>
