<template>
  <div class="nav-bar">
    <div class="top">
      <van-nav-bar
        :fixed="true"
        :title="title"
        :z-index="2"
        @click-right="onClickRight"
        style="background-color:#2ea3f9;"
      >
        <div slot="left" @click="onClickLeft">
          <van-icon name="arrow-left" color="white" />
          <span style="font-size:15px;color:white">返回</span>
        </div>
        <van-icon name="wap-nav" slot="right" color="white" />
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
    }
  },
  props:{
    title:''
  },
  methods:{
    onClickRight() {

    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.top {
  padding-bottom: 50px;
}
.van-nav-bar__title{
  color: white;
}
</style>