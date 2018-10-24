<template>
  <div class="pagination">
    <div class="pagWap">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 80]"
        layout="total, sizes, prev, pager, next, jumper"
        :total=totalNum>
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  
  export default {
    name: 'pagination',
    data () {
      return {
        currentPage: 1,
        perPageNum: 10,
      }
    },
    props: {
      totalNum: {
        type: Number,
        default: 0
      }
    },
    methods: {
      //改变每页数量
      handleSizeChange (val) {
        this.perPageNum = val
        var data = {
          currentPage: this.currentPage,
          pageSize: val
        }
        this.$emit('handleSizeChange',data)
      },
      //跳转到某一页
      handleCurrentChange (val) {
        this.currentPage = val
        var data = {
          currentPage: val,
          pageSize: this.perPageNum
         }
        this.$emit('handleCurrentChange',data)
      }
    },
    
  }
</script>

<style scoped lang="scss">
  .pagination {
    width: 60%;
    margin-left: 20%;
    height: 18%;
    z-index: 20;
    .pagWap {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
