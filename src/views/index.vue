<template>
  <div class="index">
    <div class="login">
        <p class="title">登录</p>
        <van-cell-group>
        <van-field
            v-model="username"
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('请输入有效的用户名')"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            
        />
        <div class="btn">
        <van-button type="primary" @click="onButtonSubmit" size="large" style="border-radius:5px;height:30px;line-height:30px;background-color:#53d192;">登录</van-button>
        </div>
        </van-cell-group>
         <router-link class="link" to="registered">注册账号 </router-link> 
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            username:'',
            password:''
        }
    },
    methods: {
        onButtonSubmit(username,password) {
            console.log(this.username);
            console.log(this.password)
        }
    }
}
</script>

<style>
/* *{
    background-color: rgb(233, 236, 243,0.4)
} */
.title {
    font-size: 22px;
    color:#53d192;
}
.login {
    width: 250px;
    display: block;
    margin: auto ;
    /* padding: 15px */
    text-align: center;
    margin-top: 50%;
}
.login .btn {
    padding: 1px;
}
.link {
    font-size: 11px;
    float: right;
    padding-top: 20px;
    color: #b2b3b5;
}
</style>