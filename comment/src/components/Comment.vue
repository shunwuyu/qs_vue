<template>
  <div class="comment">
    <comment-form @transferComment="getComment"></comment-form>
    <comment-list :List="List" />
    <pagination @transferPage="getPage" 
    :totalCount="totalCount"
    :currentPage="currentPage" />
  </div>
</template>
<script>
  import CommentForm from './CommentForm.vue';
  import CommentList from './CommentList.vue';
  import Pagination from './Pagination.vue';

  export default {
    data() {
      return {
        totalCount: 0,
        currentPage: 1,
        pagesize: 3,
        totalData: [],
        List: []
      }
    },
    components: {
      CommentForm,
      CommentList,
      Pagination
    },
    methods: {
      getComment(msg) {
        console.log(msg);
        this.totalData.push({ text: msg })
        this.totalCount = this.totalData.length
        console.log("pagesize:", this.pagesize)

        if (this.totalCount <= this.pagesize) {
          console.log("a: ", this.totalCount)
          this.List = this.totalData
        } else {
          console.log("b: ", this.totalCount)
          this.List = this.totalData.slice(this.totalCount - this.pagesize)
        }
        this.currentPage = 1
        this.List.reverse()
      },
      getPage(curr, size) {
        this.currentPage = curr
        if (this.totalCount <= this.pagesize) {
            this.List = this.totalData
        } else {
            var pages = Math.ceil(this.totalCount / this.pagesize)
            var res = this.totalCount % this.pagesize
            console.log("pages: ", pages, res)
            var start = this.totalCount - this.currentPage * this.pagesize
            if (start < 0) { start = 0 }
            this.List = this.totalData.slice(start, start + this.pagesize)
        }
        this.List.reverse()

      }
    }
  }
</script>
<style>

</style>
