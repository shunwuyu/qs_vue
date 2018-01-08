<template>
  <el-col :span="24" class="pagination">
    <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pagesize" :total="totalCount" style="float:right;">
    </el-pagination>
  </el-col>
</template>
<script>
  export default {
    name: 'pagination',
    props: ['totalCount', 'currentPage'],
    data () {
      return {
        pagesize: 3,
      }
    },
    methods: {
      handleCurrentChange(val) {
        console.log("currentPage: ", this.currentPage)
        this.$emit("transferPage", val)
      }
    }
  }
</script>
<style>
.toolbar {
  background: #f2f2f2;
  padding: 10px;
  margin: 10px 0px;
}
.el-form-item {
  margin-bottom: 10px;
}

</style>
