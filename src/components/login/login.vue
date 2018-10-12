<template>
  <div class="login">
    <div class="loginWap">
      <div class="tit">LOGIN FORM</div>
      <div class="account">
        <div class="icon">
          <i class="el-icon-edit"></i>
        </div>
        <div class="inputs">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="password">
        <div class="icon">
          <i class="el-icon-edit"></i>
        </div>
        <div class="inputs">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    position: relative;
    .loginWap {
      width: 30%;
      margin-left: 35%;
      height: 40%;
      background: red;
      position: absolute;
      top: 25%;
      left: 0;
      .tit {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: white;
        .account{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon{
            flex: 1;
            height: 100%;
          }
          .inputs{
            flex: 1;
            height: 100%;
          }
        }
      }
    }
  }
</style>
