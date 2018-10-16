<template>
  <div class="layout">
    <div class="leftNav" ref="leftNav">
      <div class="navBar">
        <navBar></navBar>
      </div>
    </div>
    <div class="rightContent" ref="rightContent">
      <div class="breadCrumb">
        <breadCrumb @navBarMaxOrMin='navBarMaxOrMin'></breadCrumb>
      </div>
    </div>
  </div>
</template>

<script>
  import navBar from './component/navBar'
  import breadCrumb from './component/breadCrumb'
  
  export default {
    name: 'layout',
    methods:{
      navBarMaxOrMin(item){
        if(item === false){
          this.$refs.leftNav.setAttribute('class','leftNav navMoveToLeft')
          this.$refs.rightContent.setAttribute('class','rightContent contMoveToLeft')
        } else if(item === true){
          this.$refs.leftNav.setAttribute('class','leftNav navMoveToRight')
          this.$refs.rightContent.setAttribute('class','rightContent contMoveToRight')
        }
      }
    },
    components: {
      navBar,
      breadCrumb
    }
  }
</script>

<style scoped lang="scss">
  .layout{
    width: 100%;
    height: 100%;
    .leftNav{
      width: 230px;
      height: 100%;
      float: left;
      .navBar{
        width: 100%;
        height: 100%;
      }
    }
    .rightContent{
      margin-left: 230px;
      height: 100%;
      .breadCrumb{
        width: 100%;
        height: 80px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
      }
    }
  }
  .navMoveToLeft{
    animation:navmoveleft 0.8s;
    animation-fill-mode: forwards;
  }
  @keyframes navmoveleft{
    from {
      width: 230px;
      height: 100%;
      float: left;
    }
    to {
      width: 68px;
      height: 100%;
      float: left;
    }
  }
  .navMoveToRight{
    animation:navmoveright 0.8s;
    animation-fill-mode: forwards;
  }
  @keyframes navmoveright{
    from {
      width: 68px;
      height: 100%;
      float: left;
    }
    to {
      width: 230px;
      height: 100%;
      float: left;
    }
  }
  .contMoveToLeft{
    animation:contmoveleft 0.8s;
    animation-fill-mode: forwards;
  }
  @keyframes contmoveleft{
    from {
      margin-left: 230px;
      height: 100%;
    }
    to {
      margin-left: 68px;
      height: 100%;
    }
  }
  .contMoveToRight{
    animation:contmoveright 0.8s;
    animation-fill-mode: forwards;
  }
  @keyframes contmoveright{
    from {
      margin-left: 68px;
      height: 100%;
    }
    to {
      margin-left: 230px;
      height: 100%;
    }
  }
</style>
