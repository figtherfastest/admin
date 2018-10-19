<template>
  <div class="operate">
    <el-row>
      <el-col :span="16">
        <div class="searchWap">
          <el-input placeholder="请输入内容"></el-input>
          <el-input placeholder="请输入内容"></el-input>
          <el-input placeholder="请输入内容"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="operateWap">
          <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addOnes">添加</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="deleteGroup">删除</el-button>
          <el-button type="primary" icon="el-icon-view" @click="review">预览</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'operate',
    methods:{
      addOnes(){
        this.$emit('addOnes')
      },
      deleteGroup(){
        this.$emit('deleteGroup')
      },
      review(){
        this.$emit('review')
      }
    }
  }
</script>

<style scoped lang="scss">
  .operate {
    width: 100%;
    height: 80px;
    .el-row{
      border: none;
      .searchWap{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .el-input{
          width: 18%;
          margin-right: 10px;
        }
      }
      .operateWap{
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
</style>
