<template>
  <div class="page">
    <ul class="item">
      <li @click="start">首页</li>
      <li @click="pre"><a href="javascript:;"><<</a></li>
      <li @click="currentPre"><a href="javascript:;"><</a></li>
      <li v-for="(item, index) in arr" :class="{active: item===num}"
       :key="index" @click="getPage(item)">{{item}}</li>
      <li @click="currentNext"><a href="javascript:;">></a></li>
      <li @click="next"><a href="javascript:;">>></a></li>
      <li @click="end">尾页</li>
    </ul>
  </div>
</template>
<style>
i {
  list-style: none;
}
a{text-decoration: none;color: #fff;display: block;width: 100%;height: 100%}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item li {
  width: 50px;
  height: 50px;
  background: salmon;
  margin: 10px;
  line-height: 50px;
  cursor: pointer;
}
.item .active {
  background: saddlebrown;
}
</style>
<script>
  export default {
    data () {
      return {
        num: Number,
        // 页面显示的数组
        arr: [],
        page: Number,
        // 是否整除
        Remainder: Number,
        // 商
        merchant: Number
      }
    },
    props: {
      total: {
        type: Number,
        default: 5
      },
      currentIndex: {
        type: Number,
        default: 1
      },
      listLen: {
        type: Number,
        default: 5
      }
    },
    methods: {
      start () {
        let [firstIndex] = this.arr;
        // console.log(firstIndex);
        if (firstIndex === 1) {
          alert('已经是第一个列表了');
          return;
        }
        this.pagination();
        this.getPageNum(this.num);
      },
      pre () {
        if (this.arr[0] === 1) {
          alert('第一页了');
          this.num = 1;
          return;
        }
        if (this.Remainder === 0) {
          for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i] - this.page;
          }
          [this.num] = this.arr
        } else {
          var first = this.arr[0];
          var temp = [];
          for (var i = this.page; i > 0; i--) {
            temp.push(first - i);
          }
          this.arr = [...temp];
          [this.num] = this.arr;
        }
        this.getPageNum(this.num);
      },
      currentPre () {
        let [firstIndex]=this.arr;
        if(firstIndex===this.num){
          return
        }
        this.num--;
        this.getPageNum(this.num)
      },
      next () {
        var last = this.arr[this.arr.length -1];
        if (last === this.total) {
          alert('最后一页了');
          return;
        }
        if (this.Remainder === 0) {
          for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i] + this.page;
          }
          this.num = this.arr[0];
        } else {
          for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i] + this.page;
          }
          var temp = [];
          for (var j = 0; j < this.arr.length; j++) {
            if (this.arr[j] <= this.total) {
              temp.push(this.arr[j]);
            }
          }
          this.arr = [...temp];
          [this.num] = this.arr;
        }
        this.getPageNum(this.num);
      },
      end () {
        let lastIndex = this.total + 1; //总页码加1  
      let [first] = this.arr; //获取数组第一项
      let temp = [];   //设置一个临时数组，用来拷贝
      if (this.arr[this.arr.length - 1] === this.total) {
        alert("已经是最后一个列表页了");
        return;
      }
      if (this.Remainder === 0) {   //是否整除
        for (let i = this.page; i > 0; i--) {
          temp.push(lastIndex - i);
        }
        this.arr = temp;
        [this.num]=this.arr
      } else {
        for (let i = this.Remainder; i > 0; i--) {
          temp.push(lastIndex - i);
        }
        this.arr = temp;
        [this.num]=this.arr
      }
      this.getPageNum(this.num);
      },
      currentNext () {
        let lastIndex=this.arr[this.arr.length-1]
      if(lastIndex===this.num){
          return
      }
      this.num++;
       this.getPageNum(this.num)
      },
      getPage (index) {
        this.num = index;
        this.getPageNum(index);
      },
      getPageNum (num) {
        this.$emit('getPage', num);
      },
      pagination () {
        this.num = this.currentIndex;
        this.page = this.listLen;
        this.merchant = this.total / this.page;
        this.Remainder = this.total % this.page;
        if (this.merchant <= 1) {
          for (let k = 1; k <= this.total; k++) {
            this.arr.push(k);
          }
        } else {

          console.log('fdfdf');
          let temp = [];
          for (let i = 1; i <= this.page; i++) {
            temp.push(i);
          }
          this.arr = [...temp];
        }

      }
    },
    mounted () {
      this.$nextTick(() => {
        this.pagination();
      });
    }
  }
</script>