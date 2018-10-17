<template>
  <div class="forms">
    <el-row>
      <el-col v-for="headItem in header" :span="headItem.grind">
        <div class="grid-content">{{headItem.name}}</div>
      </el-col>
    </el-row>
    <el-row v-for="contentItem in content">
      <el-col :span="1">
        <div class="grid-content">{{contentItem.id}}</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">{{contentItem.date}}</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">{{contentItem.auth}}</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">{{contentItem.sex}}</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">{{contentItem.status}}</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content" style="text-align: left;padding-left: 20px;">{{contentItem.tittle}}</div>
      </el-col>
      <el-col :span="2">
        <el-row>
          <el-button size="mini" type="primary" @click="changeCoverState">
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
    name: 'forms',
    props: {
      header: {
        type: Array,
        default: []
      },
    },
    created () {
      console.log(this.indexListDetail)
    },
    computed: {
      content () {
        return this.indexListDetail
      },
      ...mapGetters([
        'indexListDetail'
      ])
    },
    methods: {
      changeCoverState () {
        this.set_coverState(true)
        this.set_fixOneList(this.header)
      },
      ...mapMutations({
        set_coverState: 'SET_COVERSTATE',
        set_fixOneList:'SET_FIXONELIST'
      })
    }
  }
</script>

<style scoped lang="scss">
  .forms {
    width: 100%;
    height: 100%;
    overflow: auto;
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
  
  .el-col:nth-last-child(1) {
    border-right: none;
  }
  
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
