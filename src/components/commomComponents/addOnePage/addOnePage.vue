<template>
  <transition name="slide">
    <div class="addOne" v-show="addOneListState">
      <div class="bdgs" @click="changeCoverStates"></div>
      <div class="listContent">
        <el-container>
          <el-header>添加</el-header>
          <el-main>
            <div class="contentList">
              <div class="tit">景区名称</div>
              <el-select placeholder="请选择" ref="searchVal" v-model="choosedSenic">
                <el-option v-for="item in senicName"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                
                >
                </el-option>
              </el-select>
              <!--<el-input placeholder="请输入内容" @blur="changeInputs"></el-input>-->
            </div>
            <div class="contentList">
              <div class="tit">日期选择</div>
              <el-select placeholder="请选择" ref="searchVal" v-model="choosedDate">
                <el-option v-for="item in scenicDate"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                
                >
                </el-option>
              </el-select>
            </div>
            <div class="contentList">
              <div class="tit">是否填报</div>
              <el-input placeholder="请输入（是或否）" v-model="isInput" @blur="changeInputs"></el-input>
            </div>
            <div class="contentList">
              <div class="tit">客流量</div>
              <el-input placeholder="请输入客流量" v-model="tirvalSum" @blur="changeInputs"></el-input>
            </div>
            <div class="contentList">
              <div class="tit">请选择时间</div>
              <el-date-picker
                v-model="chooseTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
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
        inputStates: true,
        chooseTime: '',
        isInput: '',
        tirvalSum: '',
        choosedSenic: '',
        senicName: [
          {
            value: '670',
            label: '东昌湖'
          },
          {
            value: '3000',
            label: '光岳楼'
          },
          {
            value: '3001',
            label: '宋代铁塔'
          },
          {
            value: '3002',
            label: '狮子楼'
          }
        ],
        choosedDate: '',
        scenicDate: [
          {
            value: 'm',
            label: '月'
          },
          {
            value: 'd',
            label: '日'
          }
        ]
      }
    },
    methods: {
      changeCoverStates () {
        this.set_addOneListState(false)
      },
      
      coverConfirmBtn () {
        var data = {
          'scenicid': this.choosedSenic,
          'timetag': 'd',
          'uv': this.tirvalSum,
          'datekey': this.formatTime(this.chooseTime),
          'isforecastdata': this.isInput
        }
        if (this.inputStates === false) {
          this.$alert('请填写完成的信息', '失败', {
            confirmButtonText: '确定'
          })
        } else {
          this.$emit('addListToPage', data)
        }
      },
      formatTime (data) {
        
        var year = data.getFullYear()
        var month = data.getMonth() >= 10 ? data.getMonth() : '0' + data.getMonth()
        var day = data.getDate() >= 10 ? data.getDate() : '0' + data.getDate()
        return year + '' + month + '' + day + ''
      },
      //表单验证
      changeInputs (event) {
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
        this.set_addOneListState(false)
      },
      ...mapMutations({
        set_addOneListState: 'SET_ADDONELISTSTATE',
        set_addOneParams: 'SET_ADDONEPARAMS'
      })
    },
    computed: {
      ...mapGetters([
        'addOneListState',
      ])
    },
  }
</script>

<style scoped lang="scss">
  .addOne {
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
            .el-input {
              width: 75%;
            }
            .el-select {
              width: 75%;
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
