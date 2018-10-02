<template>
 <div class="login">
   <div class="loginWap">
     <div>LOGIN FORM</div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login{
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    position: relative;
    .loginWap{
      width: 42%;
      margin-left: 29%;
      height: 60%;
      background: red;
      position: absolute;
      top: 20%;
      left: 0;
    }
  }
</style>
