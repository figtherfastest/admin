<template>
  <div class="navBarItem">
    <el-submenu :index="navItem.index" v-show="navItem.hasKid">
      <template slot="title">
        <i :class="navItem.icon"></i>
        <span slot="title" v-show="!navBarState">{{navItem.name}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="navItem.index+'-'+listItem.index" v-for="listItem in navItem.kid"
                      @click="kidGoPages(navItem.url,navItem.name,listItem.url,listItem.name)">
          <i :class="listItem.icon"></i>
          <span slot="title"> {{listItem.name}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item :index="navItem.index" v-show="!navItem.hasKid" @click="goPage(navItem.url,navItem.name)">
      <i :class="navItem.icon"></i>
      <span slot="title">{{navItem.name}}</span>
    </el-menu-item>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  
  export default {
    name: 'navBarItem',
    props: {
      navItem: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'navBarState'
      ])
    },
    methods:{
      kidGoPages(url1,name1,url2,name2){
        var data = [
          {
            url:url1,
            name:name1
          },
          {
            url:url2,
            name:name2
          }
        ]
        alert(1)
        console.log(data)
        this.set_breadCurbList(data)
      },
      goPage(url,name){
        var data = [
          {
            url:url,
            name:name
          }
        ]
        this.set_breadCurbList(data)
      },
      ...mapMutations({
        set_breadCurbList:'SET_BREADCURBLIST'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .navBarItem {
    width: 100%;
    height: 100%;
    .allItemList {
      width: 100%;
      height: 100%;
    }
  }
  
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
  
  .el-submenu__icon-arrow {
    /*display: none;*/
  }
</style>
