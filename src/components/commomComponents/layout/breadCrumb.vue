<template>
  <div class="breadCrumbs">
    <div class="nav">
      <div class="navIcon" @click="changeNavBar">
        <span class="iconfont icon-xian" v-show="verticalLine"></span>
        <span class="iconfont icon-xian1" v-show="horizonalLine"></span>
      </div>
      <div class="curbWap">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in breadCurbList" :to="{ path: item.url?'/'+item.url:'' }"
                              :class="index==0?'firstCurb':'not'">{{item.name}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="personcenter"></div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  
  export default {
    name: 'breadCrumb',
    data () {
      return {
        verticalLine: true,
        horizonalLine: false,
        navBarMaxOrMin: true
      }
    },
    computed: {
      ...mapGetters([
        'breadCurbList'
      ])
    },
    methods: {
      changeNavBar () {
        this.verticalLine = !this.verticalLine
        this.horizonalLine = !this.horizonalLine
        this.navBarMaxOrMin = !this.navBarMaxOrMin
        this.setNavBarState(this.horizonalLine)
        this.$emit('navBarMaxOrMin', this.navBarMaxOrMin)
      },
      ...mapMutations({
        setNavBarState: 'SET_NAVBARSTATE'
      })
    }
  }
</script>

<style scoped lang="scss">
  .breadCrumbs {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav {
      flex: 3;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .navIcon {
        width: 30px;
        height: 30px;
        padding-left: 15px;
        .iconfont {
          font-size: 20px;
        }
      }
      .curbWap {
        width: 70%;
        margin-left: 1%;
      }
    }
    .personcenter {
      flex: 1;
    }
  }
  
  .icon {
    font-size: 25px;
  }
  
  .firstCurb {
    font-weight: bolder !important;
    color: black !important;
  }

</style>
