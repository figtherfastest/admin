<template>
  <div class="listDetail" v-show="coverState">
    <div class="bdgs" @click="changeCoverStates"></div>
    <div class="listContent">
      <el-container>
        <el-header>编辑</el-header>
        <el-main>
          <div class="contentList" v-for="item in fixOneList">
            <div class="tit">{{item.name}}</div>
            <el-input placeholder="请输入内容" ref="checkValue"></el-input>
          </div>
        </el-main>
        <el-footer>
          <el-row>
            <el-button type="primary" @click="coverConfirmBtn">确认</el-button>
            <el-button type="danger" @click="coverQuitBtn">取消</el-button>
          </el-row>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex'
  
  export default {
    name: 'listDetail',
    data () {
      return {}
    },
    methods: {
      changeCoverStates () {
        this.set_coverState(false)
      },
      coverConfirmBtn () {
        //在这边请求两个数据
        // 请求1：编辑确定的按钮
        //请求2：更新列表
        // 这两个请求的url 和 data 应该都是 别的页面传递过来  请求要求：1，说明是post请求还是get请求
        if(this.checkContent()===false){
          alert('111')
        }
        
      },
      //表单验证
      checkContent () {
        var listItem = this.$refs.checkValue
        for(var i=0;i<listItem.length;i++){
          if(listItem[i].currentValue === ""){
            return false
          }
        }
      },
      coverQuitBtn () {
        
        this.set_coverState(false)
      },
      ...mapMutations({
        set_coverState: 'SET_COVERSTATE'
      })
    },
    computed: {
      ...mapGetters([
        'coverState',
        'fixOneList'
      ])
    },
  }
</script>

<style scoped lang="scss">
  .listDetail {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    .bdgs {
      width: 100%;
      height: 100%;
      z-index: -5;
      position: absolute;
      background: rgba(0, 0, 0, 0.32);
      left: 0;
      top: 0;
    }
    .listContent {
      width: 50%;
      margin-left: 25%;
      height: 60%;
      margin-top: 6%;
      z-index: 30;
      background: #fff;
      .el-container {
        width: 100%;
        height: 100%;
        .el-main {
          width: 80%;
          margin-left: 10%;
          overflow: auto;
          .contentList {
            width: 80%;
            margin-left: 10%;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .tit {
              width: 20%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 16px;
              font-weight: bold;
              color: #606266;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        .el-header {
          color: #303133;
          text-align: left;
          line-height: 60px;
          font-size: 18px;
          font-weight: bold;
        }
        .el-footer {
          height: 100px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      }
    }
  }
  
  .el-input-group__prepend {
    background-color: #fff;
    border: none !important;
  }

</style>
