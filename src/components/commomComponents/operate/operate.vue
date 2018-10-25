<template>
  <div class="operate">
    <el-row>
      <el-col :span="16">
        <div class="searchWap">
          <el-input :placeholder="'请输入'+item+'的值'" ref="searchVal" v-for="(item,index) in header" :key="index"></el-input>
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
  import {mapGetters,mapMutations} from 'vuex'
  import {SET_LOADSTATE} from '../../../store/mutation-types'
  
  export default {
    name: 'operate',
    props: {
      header: {
        type: Array,
        default: []
      }
    },
    computed: {
      ...mapGetters([
        'indexListDetail'
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
        var getVal = []
        this.$refs.searchVal.forEach(res => {
          getVal.push(res.currentValue)
        })
        var lastObj = {}
        var list = this.indexListDetail
        if (list.length === undefined) {
          return
        } else {
          var key = Object.keys(list[0])
          key.forEach((res, index) => {
            lastObj[res] = getVal[index]
          })
          this.$emit('search',lastObj)
          this.set_loadState('searchLoad')
          console.log(lastObj)
        }
      },
      ...mapMutations({
        set_loadState:'SET_LOADSTATE'
      })
    }
  }
</script>

<style scoped lang="scss">
  .operate {
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
        .el-input {
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
