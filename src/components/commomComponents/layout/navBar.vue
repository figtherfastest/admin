<template>
  <div class="navBar">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#2d3a4b" text-color="#fff"
             active-text-color="#409eff" default-active="0" :router=true>
      <navBarItem v-for="item in navList" :navItem="item"></navBarItem>
    </el-menu>
  </div>
</template>

<script>
  import navBarItem from './navBarItem'
  import {mapGetters} from 'vuex'
  
  export default {
    name: 'navBar',
    data () {
      return {
        navItem: {},
        navList: [
          {
            name: '首页',
            id: '123',
            url: 'indexList',
            hasKid: false,
            icon: 'el-icon-service',
            index: '0'
          },
          {
            name: '系统管理',
            id: '123',
            url: '',
            hasKid: true,
            icon: 'el-icon-document',
            index: '1',
            kid: [
              {
                name: '系统一',
                id: '123',
                url: 'systemOne',
                hasKid: false,
                icon: 'el-icon-success',
                index: '0'
              },
              {
                name: '系统二',
                id: '123',
                url: 'systemTwo',
                hasKid: false,
                icon: 'el-icon-warning',
                index: '1'
              }
            ]
          },
          {
            name: '景区客流预测',
            id: '123',
            url: 'scenicSpot',
            hasKid: false,
            icon: 'el-icon-menu',
            index: '2'
          },
        ]
      }
    },
    computed: {
      isCollapse () {
        return this.navBarState
      },
      ...mapGetters([
        'navBarState'
      ])
    },
    components: {
      navBarItem
    }
  }
</script>

<style scoped lang="scss">
  .navBar {
    width: 100%;
    height: 100%;
    background: #2d3a4b;
    overflow: auto;
  }
  
  .el-menu {
    border-right: none;
  }
  
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
</style>
