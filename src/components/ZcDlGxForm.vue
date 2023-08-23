<script setup lang="ts">
/**
 * VUE3: TS 与组合式 API
 * 注册、登录、更新用户信息业务组件
 */
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const zcDlGxRef = ref<FormInstance>()
const checked = ref(false)

defineProps<{
    path: string
}>()

const checkPhone = (rule: any, value: any, callback: any) => {
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
            if (!zcDlGxRef.value) return
            zcDlGxRef.value.validateField('passwordTwo', () => null)
        }
        callback()
    }
}
const validatePwd2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== formItems.passwordOne) {
        callback(new Error('两次输入的密码不一致'))
    } else {
        callback()
    }
}

const formItems = reactive({
    passwordOne: '',
    passwordTwo: '',
    phone: '',
    smscode: ''
})

const rules = reactive<FormRules>({
    passwordOne: [{ validator: validatePwd1, trigger: 'blur' }],
    passwordTwo: [{ validator: validatePwd2, trigger: 'blur' }],
    phone: [{ validator: checkPhone, trigger: 'blur' }],
    smscode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
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

// TODO
function getSmscode() { }

const routerJump = (p: string) => {
    router.replace(p)
}
</script>

<template>
    <div class="container">
        <el-row justify="center" class="rowWrapper">
            <el-col :xs="22" :sm="14" :md="10" :lg="9" :xl="8" class="colWrapper">
                <div class="brand">官方商城管理系统</div>
                <div class="greeting">欢迎您的使用！</div>
                <el-form ref="zcDlGxRef" :model="formItems" :rules="rules">
                    <el-form-item prop="phone">
                        <el-input clearable maxlength="11" v-model="formItems.phone" placeholder="请输入手机号码" class="zdginput" />
                    </el-form-item>
                    <el-form-item prop="passwordOne">
                        <el-input clearable maxlength="20" type="password" autocomplete="off" show-password v-model="formItems.passwordOne"
                            placeholder="请输入密码" class="zdginput" />
                    </el-form-item>
                    <el-form-item prop="passwordTwo" v-if="path !== 'login'">
                        <el-input clearable maxlength="20" type="password" autocomplete="off" show-password v-model="formItems.passwordTwo"
                            placeholder="请再次输入密码" class="zdginput" />
                    </el-form-item>
                    <el-form-item prop="smscode" v-if="path !== 'login'">
                        <el-input clearable maxlength="6" v-model="formItems.smscode" placeholder="请输入验证码" class="zdginput">
                            <template #append>
                                <el-button @click="getSmscode">点击获取验证码</el-button>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="btnWrapper">
                        <template v-if="path === 'login'">
                            <el-button type="primary" class="rlabtn width100" @click="submitForm(zcDlGxRef)">登录</el-button>
                        </template>
                        <template v-else-if="path === 'register'">
                            <el-button class="rlabtn" @click="resetForm(zcDlGxRef)">重置</el-button>
                            <el-button type="primary" class="rlabtn" @click="submitForm(zcDlGxRef)">注册</el-button>
                        </template>
                        <template v-else>
                            <el-button class="rlabtn" @click="resetForm(zcDlGxRef)">重置</el-button>
                            <el-button type="primary" class="rlabtn" @click="submitForm(zcDlGxRef)">提交</el-button>
                        </template>
                    </el-form-item>
                </el-form>
                <template v-if="path === 'login'">
                    <div class="alive">
                        <el-checkbox v-model="checked">保持登录</el-checkbox>
                        <span class="alike" @click="routerJump('/alter-pwd')">忘记密码？</span>
                    </div>
                    <div class="traversing">
                        您还没有账户？<span class="alike" @click="routerJump('/register')">去创建</span>
                    </div>
                </template>
                <div v-else-if="path === 'register'" class="traversing">
                    已经有了账户？<span class="alike" @click="routerJump('/login')">去登录</span>
                </div>
                <div v-else class="traversing">
                    密码更新完成？<span class="alike" @click="routerJump('/login')">去登录</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background: url(@/assets/images/bg8.jpg);
    background-size: cover;
}

.rowWrapper {
    height: 100%;
    align-items: center;
}

.colWrapper {
    background: #ffffff;
    padding: 3rem;
    opacity: 0.95;
}

.brand {
    color: #141414;
    font-size: 1.95rem;
    margin-bottom: 2rem;
}

.greeting {
    color: #262626;
    font-size: 1.05rem;
    margin-bottom: 1rem;
}

.zdginput {
    height: 52px;
    margin-top: 0.5rem;
    font-size: 0.9575rem;
}

:deep(.el-form-item__content) {
    justify-content: space-between;
}

:deep(.el-input-group__append button.el-button:hover) {
    color: #409eff;
}

.btnWrapper {
    margin-top: 2rem;
}

.rlabtn {
    width: 46%;
    height: 48px;
    font-size: 1rem;
}

.width100 {
    width: 100%;
}

.alive {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 0.875rem;
}

.traversing {
    color: #595959;
    font-size: 1rem;
    text-align: center;
}

.alike {
    color: #4d83ff;
    cursor: pointer;
}
</style>
