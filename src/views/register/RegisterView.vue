<script setup lang="ts">
/**
 * VUE3: TS 与组合式 API
 */
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入手机号码'))
  } else if (!/^1[3456789]\d{9}$/.test(value)) {
    return callback(new Error('手机号码格式有误'))
  } else {
    callback()
  }
}

const validatePwd1 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (formItems.passwordTwo !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('passwordTwo', () => null)
    }
    callback()
  }
}
const validatePwd2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== formItems.passwordOne) {
    callback(new Error("两次输入的密码不一致"))
  } else {
    callback()
  }
}

const formItems = reactive({
  username: '',
  passwordOne: '',
  passwordTwo: '',
  phone: '',
  smscode: '',
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  passwordOne: [{ validator: validatePwd1, trigger: 'blur' }],
  passwordTwo: [{ validator: validatePwd2, trigger: 'blur' }],
  phone: [{ validator: checkAge, trigger: 'blur' }],
  smscode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
  ],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

function getSmscode() {}

const toLogin = () => {
  router.replace('/login')
}
</script>

<template>
  <div class="login">
    <el-row justify="center" class="rowContainer">
      <el-col :xs="22" :sm="14" :md="10" :lg="9" :xl="8" class="colContainer">
        <div class="logo">官方商城管理系统</div>
        <div class="greeting">欢迎您的使用！</div>
        <el-form
          ref="ruleFormRef"
          :model="formItems"
          status-icon
          :rules="rules"
        >
          <el-form-item prop="username">
            <el-input v-model="formItems.username" placeholder="请输入用户名" class="linput" />
          </el-form-item>
          <el-form-item prop="passwordOne">
            <el-input
              type="password"
              autocomplete="off"
              show-password
              v-model="formItems.passwordOne"
              placeholder="请输入新密码"
              class="linput"
            />
          </el-form-item>
          <el-form-item prop="passwordTwo">
            <el-input
              type="password"
              autocomplete="off"
              show-password
              v-model="formItems.passwordTwo"
              placeholder="请再次输入新密码"
              class="linput"
            />
          </el-form-item>
          <el-form-item prop="phone">
            <el-input maxlength="11" v-model="formItems.phone" placeholder="请输入手机号码" class="linput" />
          </el-form-item>
          <el-form-item prop="smscode">
            <el-input v-model="formItems.smscode" placeholder="请输入验证码" class="linput">
              <template #append>
                <el-button @click="getSmscode">点击获取验证码</el-button>
              </template
              >
            </el-input>
          </el-form-item>
          <el-form-item class="apbtns">
            <el-button class="apbtn" @click="resetForm(ruleFormRef)">重置</el-button>
            <el-button type="primary" class="apbtn" @click="submitForm(ruleFormRef)">注册</el-button>
          </el-form-item>
        </el-form>
        <div class="account">已经有了账户？<span class="atag" @click="toLogin">去登录</span></div>
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
  margin-bottom: 1rem;
}
.linput {
  height: 56px;
  margin-top: 0.5rem;
  font-size: 0.9575rem;
}
::v-deep .el-form-item__content {
  justify-content: space-between;
}
.apbtns {
  margin-top: 2rem;
}
.apbtn {
  width: 46%;
  height: 50px;
  font-size: 1rem;
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
