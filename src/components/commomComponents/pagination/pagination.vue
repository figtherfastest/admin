<template>
	<div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    data() {
      return {
        currentPage4: 400
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    
  }
</script>

<style scoped lang="scss">
.pagination{
  width: 60%;
  margin-left: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
