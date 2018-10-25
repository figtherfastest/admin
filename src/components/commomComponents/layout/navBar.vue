<template>
  <div class="navBar">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#2d3a4b" text-color="#fff"
             active-text-color="#409eff" :default-active="this.$route.path.substr(1)" :unique-opened=true :router=true>
      <navBarItem v-for="(item,index) in navList" :key="index" :navItem="item"></navBarItem>
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
            url: 'indexList',
            hasKid: false,
            icon: 'el-icon-service',
            index: '0',
          },
          {
            name: '系统管理',
            url: '',
            hasKid: true,
            icon: 'el-icon-document',
            index: '1',
            kid: [
              {
                name: '用户管理',
                url: 'systemUser',
                hasKid: false,
                icon: 'el-icon-success',
                index: '1-0'
              },
              {
                name: '角色管理',
                url: 'systemRole',
                hasKid: false,
                icon: 'el-icon-warning',
                index: '1-1'
              }
            ]
          },
          {
            name: '景区客流预测',
            url: 'scenicSpot',
            hasKid: false,
            icon: 'el-icon-menu',
            index:'2'
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
