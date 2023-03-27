<script setup lang="ts">
/**
 * VUE3: TS 与组合式 API
 */
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const username = ref('')
const password = ref('')
const checked = ref(false)

function createAccount() {
 router.replace('/register')
}
function forgetPwd() {
  router.replace('/alter-pwd')
}
</script>

<template>
  <div class="login">
    <el-row justify="center" class="rowContainer">
      <el-col :xs="22" :sm="14" :md="10" :lg="9" :xl="8" class="colContainer">
        <div class="logo">官方商城管理系统</div>
        <div class="greeting">欢迎您的使用！</div>
        <el-input v-model="username" placeholder="用户名" class="linput" />
        <el-input type="password" v-model="password" placeholder="密码" class="linput" />
        <el-button type="primary" class="dlbtn">登录</el-button>
        <div class="other">
          <el-checkbox v-model="checked">保持登录</el-checkbox>
          <span class="atag" @click="forgetPwd">忘记密码？</span>
        </div>
        <div class="account">还没有账户？<span class="atag" @click="createAccount">去创建</span></div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url(@/assets/images/bg.jpg);
  background-size: cover;
}
.rowContainer {
  height: 100%;
  align-items: center;
}
.colContainer {
  background: #ffffff;
  padding: 3rem;
}
.logo {
  color: #141414;
  font-size: 1.95rem;
  margin-bottom: 2rem;
}
.greeting {
  color: #262626;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
}
.linput {
  height: 56px;
  margin-bottom: 1.5rem;
  font-size: .9575rem;
}
.dlbtn {
  width: 100%;
  height: 50px;
  font-size: 1rem;
}
.other {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-size: 0.875rem;
}
.account {
  color: #595959;
  font-size: 1rem;
  text-align: center;
}
.atag {
  color: #4d83ff;
  cursor: pointer;
}
</style>
