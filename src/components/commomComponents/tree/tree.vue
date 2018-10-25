<template>
  <div class="tree">
    <el-tree
      :data="data2"
      show-checkbox
      node-key="id"
      :accordion=true
      :default-expand-all=true
      ref="tree"
      @current-change="getCheckedNodes"
    >
    </el-tree>
    <div class="buttons">
      <!--<el-button @click="getCheckedNodes">通过 node 获取</el-button>-->
      <!--<el-button @click="getCheckedKeys">通过 key 获取</el-button>-->
      <!--<el-button @click="setCheckedNodes">通过 node 设置</el-button>-->
      <!--<el-button @click="setCheckedKeys">通过 key 设置</el-button>-->
      <!--<el-button @click="resetChecked">清空</el-button>-->
    </div>
  
  </div>
</template>

<script>
  export default {
    name: 'tree',
    methods: {
      getCheckedNodes(data){
        console.log(data)
      }
    },
    
    data () {
      return {
        data2: [
          {
            id: 1,
            label: '一级 1',
            children: [
              {
                id: 4,
                label: '二级 1-1',
                children: [
                  {
                    id: 9,
                    label: '三级 1-1-1'
                  },
                  {
                    id: 10,
                    label: '三级 1-1-2'
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            label: '一级 2',
            children: [
              {
                id: 5,
                label: '二级 2-1'
              },
              {
                id: 6,
                label: '二级 2-2'
              }
            ]
          },
          {
            id: 3,
            label: '一级 3',
            children: [
              {
                id: 7,
                label: '二级 3-1'
              },
              {
                id: 8,
                label: '二级 3-2'
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .tree {
    width: 100%;
    height: 350px;
  }
</style>
