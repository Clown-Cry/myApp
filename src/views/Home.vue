<template>
  <div class="home">
    <!-- <div class="top">
      <van-nav-bar
        :fixed="true"
        :title="title"
        @click-right="onClickRight"
        style="background-color:#2ea3f9;"
      >
      <div slot="left" @click="onClickLeft">
        <van-icon name="arrow-left" color="white" />
        <span  style="font-size:15px;color:white">返回</span>
      </div>
        <van-icon name="wap-nav" slot="right" color="white" />
      </van-nav-bar>
    </div> -->
    <!-- <h1>this is home</h1> -->
    <!-- <router-link to="/Home/population">显示登录页面</router-link> -->
    <!-- http://localhost:8080/#/Home/population -->

    <!-- <NavBar></NavBar> -->
    <router-view></router-view>
    <!-- <Scan :outdata="title"  v-model="title"></Scan> -->

    <!-- <HelloWorld /> -->



    <div class="bottom">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" @click="chang1">首页</van-tabbar-item>
        <van-tabbar-item icon="search" @click="chang2">购电宝</van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="chang3">用电宝</van-tabbar-item>
      </van-tabbar>
      <!-- <van-popup v-model="show" position="left" :style="{height:'100%'}">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="项目一" />
          <van-sidebar-item title="项目二" />
          <van-sidebar-item title="项目三" />
        </van-sidebar>
      </van-popup> -->
    </div>
    <Popup :show="show"></Popup>
  </div>
</template>

<script>
// @ is an alias to /src
import Popup from "@/components/popup.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Scan from "@/page/scan.vue";
import NavBar from "@/components/commom/NavBar.vue"


export default {
  name: "home",
  components: {
    HelloWorld,
    Popup,
    Scan,
    NavBar
  },
  data() {
    return {
      a:"我是父组件的值aaaa",
      title:'购电小程序',
      show: false,
      active: 0,
    };
  },
  methods: {
    changeA(event) {
      this.a = event;
      console.log(event)
    },
    chang1(){
      this.$router.push('/population')
    },
    chang2(){
      this.$router.push('/Gdpage')
    },
    chang3(){
      this.$router.push('/Ydpage')
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.show = true;
    },
    retuen() {}
  }
};
</script>
<style scoped>
.top {
  padding-bottom: 46px;
}
.van-nav-bar__title{
  color: white;
}
.bottom {
  padding-top:50px;
}
</style>
