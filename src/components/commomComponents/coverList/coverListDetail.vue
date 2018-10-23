<template>
  <transition name="slide">
  <div class="listDetail" v-show="coverState">
    <div class="bdgs" @click="changeCoverStates"></div>
    <div class="listContent">
      <el-container>
        <el-header>编辑</el-header>
        <el-main>
          <div class="contentList" v-for="item in OneList">
            <div class="tit">{{item.name}}</div>
            <el-input placeholder="请输入内容" :disabled="item.name==='id'" ref="checkValue"  :value="item.value" @blur="changeInputs"></el-input>
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
  </transition>
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex'
  
  export default {
    name: 'listDetail',
    data () {
      return {
        inputStates: true
      }
    },
    methods: {
      changeCoverStates () {
        this.set_coverState(false)
      },
      
      coverConfirmBtn () {
        if (this.inputStates === false) {
          this.$alert('请填写完成的信息', '失败', {
            confirmButtonText: '确定'
          })
        } else {
          var dataObj = this.fixOneList
          var key = Object.keys(dataObj)
          this.$refs.checkValue.forEach((res, index) => {
            dataObj[key[index]] = res.currentValue
          })
          this.$emit('fixOneState', dataObj)
        }
      },
      
      //表单验证
      changeInputs (event) {
        console.log(event)
        if (event.target.value === '') {
          this.$message({
            showClose: true,
            message: '请填写完整的信息,么么哒',
            duration: 1000,
            type: 'error'
          })
          this.inputStates = false
        } else {
          this.inputStates = true
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
      OneList () {
        var allKeys = Object.values(this.fixOneList)
        var kvObj = []
        allKeys.forEach((res, index) => {
          var obj = {}
          obj.name = this.fixOneName[index]
          obj.value = res
          kvObj.push(obj)
        })
        return kvObj
      },
      ...mapGetters([
        'coverState',
        'fixOneList',
        'fixOneName'
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
  .slide-enter-active, .slide-leave-active {
    transition: all 0.6s
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(0, -100%, 0);
  }
</style>
