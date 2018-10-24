<template>
  <div class="tabForm">
    <!--header-->
    <el-row class="headRow">
      <el-col :span="2" :class="{active:0==index}" >
        <div class="grid-content" @click="activeYear">年</div>
      </el-col>
      <el-col :span="2" :class="{active:1==index}"  >
        <div class="grid-content " @click="activeMonth">月</div>
      </el-col>
      <el-col :span="2" :class="{active:2==index}" >
        <div class="grid-content "  @click="activeDay">日</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <!--tittle-->
    <el-row class="tittle">
      <el-col :span=8>
        <div class="grid-content">
          <el-button type="primary" size="mini" icon="el-icon-check">全选</el-button>
        </div>
      </el-col>
      <el-col v-for="(headItem,headIndex) in header" :key="headIndex">
        <div class="grid-content">{{headItem}}</div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content">操作</div>
      </el-col>
    </el-row>
    <!--content-->
    <el-row v-for="(contentItem,contentIndex) in content" :key="contentIndex" class="content">
      <el-col :span="8" v-show="operateState">
        <div class="grid-content">
          <input type="checkbox" class="checkboxs" ref="checkBoxId" :checked="checkedState" :id="contentItem.id">
        </div>
      </el-col>
      <el-col v-for="(item,index) in contentItem" :key="index">
        <div class="grid-content">{{item}}</div>
      </el-col>
      <el-col :span="10">
        <el-row>
          <el-button size="mini" type="primary">
            <i class="el-icon-edit"></i>
            <span>detail</span>
          </el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    name: 'tabForm',
    props: {
      header: {
        type: Array,
        default: []
      },
      operateState: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        index:0
      }
    },
    computed: {
      content () {
        return this.indexListDetail
      },
      ...mapGetters([
        'indexListDetail'
      ])
    },
    methods:{
      activeYear(){
        this.index = 0
      },
      activeMonth(){
        this.index = 1
      },
      activeDay(){
        this.index = 2
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabForm {
    width: 100%;
    height: 80%;
    overflow: auto;
    background: #fff;
    border: 1px solid #dcdfe6;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    .active{
      background: white;
      border-bottom: none !important;
      border-left: 1px solid #e4e7ed;
      border-right: 1px solid #e4e7ed;
    }
  }
  .el-row {
    width: 100%;
    border: 1px solid #ebeef5;
    border-bottom: none;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-row:nth-last-child(1) {
    border-bottom: 1px solid #ebeef5;
  }
  .el-col {
    border-right: 1px solid #ebeef5;
    .grid-content {
      width: 100%;
      height: 100%;
      min-height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 15px;
      color: #909399;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .checkboxs {
    width: 18px;
    height: 18px;
  }
  .headRow {
    width: 100%;
    height: 40px;
    background-color: #f5f7fa;
    .el-col {
      height: 100%;
      border-bottom: 1px solid #e4e7ed;
      font-size: 16px;
      .grid-content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .tittle{
    margin-top:12px;
    width: 98%;
    margin-left: 1%;
  }
  .content{
    width: 98%;
    margin-left: 1%;
  }
</style>
