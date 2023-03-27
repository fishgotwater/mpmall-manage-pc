<script lang="ts">
/**
 * VUE3: TS 与选项式 API
 */
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      pwd: '',
      isShake: false,
      tips: '输入密码解锁',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  computed: {
    getClass() {
      return this.isShake ? 'lsinput shaking' : 'lsinput'
    }
  },
  methods: {
    // 解锁
    unlock() {
      const pwdStr = `${this.pwd}`.replace(/(^s*)|(s*$)/g, '')
      console.log('解锁: ', pwdStr)
      if (pwdStr.length === 0) {
        this.reminder('密码不能为空！')
      } else if ((pwdStr.length > 0 && pwdStr.length < 4) || pwdStr.length > 6) {
        this.reminder('锁屏密码为 4-6 位！')
      } else {
        // TODO: 解锁并跳转之前所在的页面
      }
    },
    // 切换账号
    switchUser() {
      // TODO: 当前用户登出
      // 跳转至登录页
      this.$router.replace('/login')
    },
    // 加载动画和提示
    reminder(tips: string) {
      this.isShake = true
      this.tips = tips
      const st = setTimeout(() => {
        this.isShake = false
        this.tips = '输入密码解锁'
        clearTimeout(st)
      }, 900)
    }
  }
})
</script>

<template>
  <div class="lockscreen">
    <el-avatar :size="90" :src="circleUrl" class="lsavatar" />
    <div class="lstips">{{ tips }}</div>
    <input type="password" v-model="pwd" :class="getClass" placeholder="请点击输入密码" />
    <el-button type="success" class="lsbutton" @click="unlock">解锁</el-button>
    <div class="lssyqtzh" @click="switchUser">使用其他账号登录</div>
  </div>
</template>

<style scoped>
.lockscreen {
  width: 100%;
  height: 100vh;
  background: url(@/assets/images/lockscreen-bg.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lsavatar {
  margin-top: 13%;
}
.lstips {
  margin-top: 3rem;
  font-size: 0.8125rem;
  color: #000000;
}
.lsinput {
  width: 345px;
  height: 46px;
  margin-top: 0.5rem;
  background: transparent;
  border-radius: 0;
  font-size: 0.9375rem;
  border: 1px solid #8c8c8c;
  text-align: center;
}
.lsinput:focus {
  outline-style: none;
}
::-webkit-input-placeholder {
  color: #bfbfbf;
  font-size: 0.9375rem;
  font-weight: 400;
}
.lsbutton {
  width: 345px;
  height: 48px;
  margin-top: 3rem;
  font-size: 0.875rem;
}
.lssyqtzh {
  height: 33px;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #ffffff;
  cursor: pointer;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(-4px, 0, 0);
  }
}
.shaking {
  animation: shake 0.82s cubic-bezier(0.36, 0.7, 0.9, 0.97);
}
/* 超小设备 (手机, 600px 以下屏幕设备) */
@media only screen and (max-width: 600px) {
  .lsavatar {
    margin-top: 30%;
  }
}
/* 中型设备（600 像素到 768 像素） */
@media only screen and (min-width: 600px) and (max-width: 768px) {
  .lsavatar {
    margin-top: 25%;
  }
}
/* 中型设备（768 像素到 960 像素） */
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .lsavatar {
    margin-top: 20%;
  }
}
</style>
