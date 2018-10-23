<template>
  <div class="operateSenicFlower">
    <el-row>
      <el-col :span="16">
        <div class="searchWap">
          <el-select placeholder="请选择" ref="searchVal" v-model="chooseSenicOut">
            <el-option v-for="item in chooseSenic"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select placeholder="请选择" ref="searchVal" v-model="chooseTimeOut">
            <el-option v-for="item in chooseTime"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
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
  import {mapGetters, mapMutations} from 'vuex'
  import {SET_LOADSTATE} from '../../../store/mutation-types'
  
  export default {
    name: 'operateSenicFlower',
    data () {
      return {
        chooseSenicOut: '',
        chooseSenic: [
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
        chooseTimeOut: '',
        chooseTime: [
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
    computed: {
      ...mapGetters([
        'indexListDetail',
        // 'operateChoosedSence',
        // 'operateChoosedDate'
      ])
    },
    methods: {
      addOnes () {
        this.$emit('addOnes')
      },
      deleteGroup () {
        this.$emit('deleteGroup')
      },
      review () {
        this.$emit('review')
      },
      search () {
        var lastObj = {
          scenicId: this.chooseSenicOut,
          itemTag: this.chooseTimeOut,
          currentPage: 1,
          pageSize: 10
        }
        this.$emit('search', lastObj)
        this.set_loadState('searchLoad')
        
      },
      ...mapMutations({
        set_loadState: 'SET_LOADSTATE'
      })
      
    }
  }
</script>

<style scoped lang="scss">
  .operateSenicFlower {
    width: 100%;
    height: 80px;
    .el-row {
      border: none;
      width: 100%;
      height: 100%;
      .searchWap {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .el-select {
          width: 18%;
          margin-right: 10px;
        }
      }
      .operateWap {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
</style>
