<template>
  <div class="Management">
    <div class="null"></div>
    <van-tabs
      type="card"
      color="#02b0ec"
      title-active-color="#ffffff"
      background="#ffffff"
      v-model="activeName"
    >
      <div class="form">
      <form class="search">
        <input type="text" name id placeholder="请输入仪表名称过滤条件" />
        <input type="submit" value="Go" />
      </form>
      </div>
      <div class="none"></div>
      <van-tab title="电表" name="a">
        <van-card
          class="card"
          v-for="(item,index) in list"
          :key="index"
          desc="描述信息"
        >
        <div class="card_title"  slot="title">{{item.title}}
        </div>
        <div class="card_desc" slot="desc">创建时间:{{item.time}}
        </div>
        <div class="card_add" slot="num" @click="onclick">
        <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
        </van-card>
      </van-tab>
      <van-tab title="水表" name="b">水表</van-tab>
      <van-tab title="气表" name="c">气表</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName:'',
      list: [
        { title: "派诺_实验1", time: "2019-06-07 15:28:09", id: 0 },
        { title: "派诺_实验2", time: "2019-06-07 15:28:09", id: 1 },
        { title: "派诺_实验3", time: "2019-06-07 15:28:09", id: 2 },
        { title: "派诺_实验4", time: "2019-06-07 15:28:09", id: 3 },
        { title: "派诺_实验5", time: "2019-06-07 15:28:09", id: 4 },
        { title: "派诺_实验6", time: "2019-06-07 15:28:09", id: 5 },
        { title: "派诺_实验7", time: "2019-06-07 15:28:09", id: 6 },
      ]
    };
  },
  methods:{
      onclick() {
          this.$router.push('scan')
      }
  }
};
</script>

<style>
.card {
    position: relative;
    margin: 10px;
    height: 60px;
    background-color: #ffffff;
    border-top:1px solid #b2b3b5;
    box-shadow:0px 4px 6px -3px;
}
.card_title {
    font-size: 16px;
}
.card_desc {
    padding-top: 5px;
    color: #b2b3b5;
    font-size: 13px;
}
.card_add {
    position:absolute;
    top: 8px;
    right: -4px;
}
input {
  border: 0;
}
.search {
  text-align: center;
  padding: 15px 0px;
}
.search input[type="text"] {
  width: 220px;
  border: 1px solid #b2b3b5;
  border-radius: 12px;
  line-height: 21px;
  padding: 5px 10px;
  font-size: 12px;
}
.search input[type="submit"] {
  border: 1px solid #b2b3b5;
  margin-left: 5px;
  padding: 5px;
}
.van-tabs--card {
  padding-top: 56px;
}
.form {
    position:fixed;
    top: 80px;
    z-index: 1;
    width: 100%;
}
.van-tabs__nav--card {
  border-radius: 15px;
  position:fixed;
  top: 60px;
  width: 90%;
  z-index: 1;
  margin-bottom: 15px;
  background-color: #ffffff;
}
.van-tabs__nav--card .van-tab.van-tab--active:first-child {
  border-radius: 10px 0px 0px 10px;
}
.van-tabs__nav--card .van-tab.van-tab--active:last-child {
  border-radius: 0px 10px 10px 0px;
}
.null { 
    position: fixed;
    width: 100%;
    background-color: #ffffff;
    height: 84px;
    z-index: 1;
}
</style>