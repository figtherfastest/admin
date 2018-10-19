<template>
  <div class="forms">
    <!--tittle-->
    <el-row>
      <el-col :span="6" v-show="operateState">
        <div class="grid-content">
          <el-button type="primary" size="mini" icon="el-icon-check" @click="chooseAll">全选</el-button>
        </div>
      </el-col>
      <el-col v-for="headItem in header">
        <div class="grid-content">{{headItem}}</div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content">操作</div>
      </el-col>
    </el-row>
    <!--content-->
    <el-row v-for="(contentItem,contentIndex) in content">
      <el-col :span="6" v-show="operateState">
        <div class="grid-content">
          <input type="checkbox" class="checkboxs" ref="checkBoxId" :checked="checkedState" :id="contentItem.id"
                 @change="getSingerId(contentItem.id)">
        </div>
      </el-col>
      <el-col v-for="item in contentItem">
        <div class="grid-content">{{item}}</div>
      </el-col>
      <el-col :span="10">
        <el-row>
          <el-button size="mini" type="primary" @click="changeCoverState(contentIndex)">
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
  
  let allId = []
  export default {
    name: 'forms',
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
    data () {
      return {
        checkedState: false
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
    methods: {
      changeCoverState (index) {
        this.set_coverState(true)
        this.set_fixOneList(this.content[index])
        this.set_fixOneName(this.header)
      },
      chooseAll () {
        this.checkedState = !this.checkedState
        if (this.checkedState === true) {
          var that = this
          allId = []
          setTimeout(function () {
            that.$refs.checkBoxId.forEach(res => {
              if (res.checked === true) {
                allId.push(res.id)
              }
            })
          }, 500)
          console.log(allId)
          this.set_groupDelete(allId)
        }
      },
      getSingerId (id) {
        if (event.target.checked === true) {
          allId.push(id)
          this.set_groupDelete(allId)
        } else {
          allId[allId.indexOf(id)] = null
          allId.splice(allId.indexOf(null), 1)
          this.set_groupDelete(allId)
        }
      },
      ...mapMutations({
        set_coverState: 'SET_COVERSTATE',
        set_fixOneList: 'SET_FIXONELIST',
        set_fixOneName: 'SET_FIXONENAME',
        set_groupDelete: 'SET_GROUPDELETE'
      })
    }
  }
</script>

<style scoped lang="scss">
  .forms {
    width: 100%;
    height: 85%;
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
  
  .checkboxs {
    width: 18px;
    height: 18px;
  }
  
  .checkboxs:checked {
    background: red;
  }
</style>
