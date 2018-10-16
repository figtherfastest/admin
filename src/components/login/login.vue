<template>
  <div class="login">
    <div class="loginWap">
      <div class="tit">LOGIN FORM</div>
      <div class="account">
        <el-row>
          <el-col :span="24">
            <el-input placeholder="请输入账号" prefix-icon="el-icon-service" suffix-icon="el-icon-close"
                      class="inputBgs"></el-input>
          </el-col>
          <el-col :span="12" class="countWrong" v-show="countWrong">账号错误</el-col>
        </el-row>
      </div>
      <div class="password">
        <el-row>
          <el-col :span="24">
            <el-input placeholder="请输入密码" prefix-icon="el-icon-setting" suffix-icon="el-icon-view"
                      class="inputBgs"></el-input>
          </el-col>
          <el-col :span="12" class="passwordWrong" v-show="passwordWrong">密码错误</el-col>
        </el-row>
      </div>
      <div class="confirmBtn">
        <el-button type="primary" class="prims" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countWrong: false,
      passwordWrong: false
    }
  },
  methods: {
    login () {
      this.$router.push({
        path: '/index'
      })
    }
  }
}
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
      }
      .account {
        width: 70%;
        margin-left: 15%;
        margin-top: 6%;
        background-color: #2d3a4b;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
      .password {
        width: 70%;
        margin-left: 15%;
        margin-top: 8%;
      }
      .confirmBtn {
        width: 70%;
        margin-left: 15%;
        margin-top: 10%;
        .prims {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  
  .countWrong, .passwordWrong {
    color: white;
    padding: 5px 0 0 5px;
  }
</style>
