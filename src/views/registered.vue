<template>
  <div class="registered">
      <van-nav-bar
        title="企业注册"
        left-arrow 
        :fixed="true"
        @click-left="onClickLeft"
        />
        <nav class="nav">
      <p class="p">企业名称</p>
      <van-cell-group>
        <van-field v-model="name" placeholder="请输入企业名称" />
      </van-cell-group>
      <p class="p">登录账号</p>
      <van-cell-group>
        <van-field
            v-model="username"
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('请输入正确用户名')"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
        />
        </van-cell-group>
        <p class="p">位置信息</p>
        <van-field
        readonly
        clickable
        label="所在地区"
        :value="province+city+area"
        placeholder="请输入省市区县"
        @click="showPicker = true"
        />
        <van-popup
        v-model="showPicker"
        round
        position="bottom"
        :style="{ height: '40%' }"
        >
        <van-area 
          :area-list="areaList"
           value="440000"
          title="所在地区" 
          @cancel="showPicker = false"
          @confirm="onConfirm"
          />
        </van-popup>
        <van-field
        v-model="value"
        clickable
        label="详细地址"
        placeholder="请输入街道、楼牌号码"
        />
        <div class="btn">
        <van-button class="btn" type="primary" size="normal">提交</van-button>
        </div>
        </nav>
  </div>
</template>

<script>
import AreaListen from '../js/area' //引入地区

export default {
  data() {
    return {
      name:'',
      username:'',
      password:'',
      province:'',
      city:'',
      area:'',
      value: '',
      showPicker: false,
      areaList:AreaListen,
            }
  },
 methods: {
    onConfirm(picker) {
        this.province = picker[0].name +' ';
        this.city = picker[1].name +' ';
        this.area = picker[2].name
        this.showPicker = false;
    },
    onClickLeft() {
        this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
nav {
    margin-top: 55px;
}
.p {
     padding: 0px 10px;
     color: #b2b3b5;
 }
 .btn {
     margin: 15px auto;
     width: 250px;
     height: 45px;
 }
 .van-nav-bar .van-icon {
     color:  #b2b3b5;
     font-size: 20px;
 }
</style>