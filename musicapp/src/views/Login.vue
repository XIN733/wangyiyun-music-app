<template>
  <div class="login-bg">
    <div class="login-contain">
      <div class="login-header">
        <p>欢迎登录</p>
      </div>
      <div class="form-group">
        <div class="form-item">
          <div class="label">
             <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yonghu"></use>
            </svg>
          </div>
          <input id="phone" type="text" placeholder="请输入手机号" autocomplete="phone" v-model="phone" />
        </div>
        <div class="form-item">
          <div class="label">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mima"></use>
            </svg>
          </div>
          <input id="password" type="password" placeholder="请输入密码" autocomplete="password" v-model="password" />
        </div>
      </div>
      <div class="button-group">
        <button class="login-btn" id="doLogin" @click="login">登录</button>
      </div>
      <div class="order-login">
        <p class="order-login-line">其他登录方式</p>
        <div class="order-login-box">
          <div>
            <a href="#">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
              <p>微信登录</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            phone:'',
            password:'',
        }
    },
    methods:{
        async login(){
            let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; 
            let phone = this.phone
            let password = this.password
            if(phone==''){
                alert('请输入手机号')
            }else if(!reg_tel.test(phone)){
                alert('手机号格式错误')
            }else if(password==''){
                alert('请输入密码')
            }else{
                let res = await this.$store.dispatch('phoneLogin',{phone,password})
                if(res.data.code == 200){
                    this.$router.push('/me')
                }else{
                    alert(res.data.msg)
                }
            }
        }
    }
};
</script>

<style lang="less">
.login-bg {
    width: 7.5rem;
    min-height: 100vh;
    background: url("@/assets/images/login-bg.png") no-repeat fixed;
    color: #ffffff;
    background-size: 100% 100%;
    margin: 0 auto;
    padding-top: 10%;
    .login-contain {
        width: 85%;
        margin: 0 auto;
        .login-header {
            padding: 5%;
            p {
                font-size: 0.32rem;
                color: #ffffff;
                font-weight: bold;
                text-align: center;
                letter-spacing: 0.02rem;
                text-shadow: 0.1em 0.15em 0.1em #bd0606
            }
        }
        .form-group {
            padding: 5%;
            .form-item {
                margin-top: 5%;
                padding:0 0.1rem;
                border-radius: 0.3rem;
                background-color: #fdb0b0;
                height: 0.6rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                position: relative;
                .label{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width:0.6rem ;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-left: 0.1rem;
                    .icon {
                        fill: #fff;
                        width: 0.25rem;
                    }
                }
                input {
                    background-color: transparent;
                    color: #ffffff;
                    height: 100%;
                    width: 100%;
                    font-size: 0.18rem;
                    margin-left: 0.6rem;
                    &::-webkit-input-placeholder {
                        color: #ffffff;
                        font-size: 0.16rem;
                    }
                    &:-moz-placeholder {
                        color: #ffffff;
                        font-size: 0.16rem;
                    }
                    &::-moz-placeholder {
                        color: #ffffff;
                        font-size: 0.16rem;
                    }
                    &:-ms-input-placeholder {
                        color: #ffffff;
                        font-size: 0.16rem;
                    }
                }
            }
        }
        button {
            outline: none;
            border: 0;
            width: 90%;
            height: 0.6rem;
            margin-top: 4%;
            border-radius: 0.3rem;
            margin-left: 4%;
            font-size: 0.18rem;
            background-color: #ffffff;
            color: #FF3F49;
        }
        .order-login {
            padding: 5%;
            .order-login-line {
                display: block;
                position: relative;
                text-align: center;
                font-size: 0.14rem;
                color: #ffffff;
                &::before,&::after{
                    content: '';
                    position: absolute;
                    top: 50%;
                    background: #ffffff;
                    width: 20%;
                    height: 1px;
                }
                &::before{
                    left: 10%;
                }
                 &::after{
                    right: 10%;
                }
            }
            .order-login-box {
                display: flex;
                width: 100%;
                justify-content:center;
                margin-top: 0.2rem;
                div{
                    flex: 1;
                    text-align: center;
                    a{
                        display: inline-block;
                        .icon{
                            width: 0.5rem;
                            height: 0.5rem;
                            fill: #fff;
                        }
                        p{
                            text-align: center;
                            font-size: 0.14rem;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
    }
}
</style>