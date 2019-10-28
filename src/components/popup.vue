<template>
  <div class="popue">
    <van-popup v-model="show" position="left" :style="{height:'100%'}">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="项目一" />
        <van-sidebar-item title="项目二" />
        <van-sidebar-item title="项目三" />
      </van-sidebar>
    </van-popup>
  </div>
</template>

<script>
export default {
    data() {
        return{
            // show:false,
            activeKey:'',
        }
    },
    props:{
      show:false,
    },
    methods:{}
};
</script>

<style>
</style>