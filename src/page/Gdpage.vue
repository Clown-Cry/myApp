<template>
  <div class="Gdpage">
    <NavBar :title = login></NavBar>
    <van-panel title="快捷入口" ></van-panel>
    <van-grid :border="true" :column-num="4">
      <van-grid-item>
        <van-icon name="youzan-shield" size="45" color="#01b4fb" />
        <span>月度需求</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="printer" size="45" color="#01b4fb" />
        <span>购电合同</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="gift-card" size="45" color="#01b4fb" />
        <span>已购套餐</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="more" size="45" color="#01b4fb" />
        <span>偏差预测</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="more" size="45" color="#01b4fb" />
        <span>月度结算</span>
      </van-grid-item>
    </van-grid>
    <!-- </van-panel> -->
    <div class="content">
      <van-panel title="本月">
        <div class="zt">
          <div class="sj">
            <span v-for="(user,i) in names" :key="i">
             {{user.name}}
              <br />
            </span>
          </div>
          <div class="sj2">
            <span v-for="(user,i) in names" :key="i">
              {{user.value}}
              <br />
            </span>
          </div>
        </div>
      </van-panel>
    </div>
          <van-panel title="上月">
        <div class="zt">
          <div class="sj">
            <span v-for="(user,i) in list" :key="i">
             {{user.name}}
              <br />
            </span>
          </div>
          <div class="sj2">
            <span v-for="(user,i) in list" :key="i">
              {{user.value}}
              <br />
            </span>
          </div>
        </div>
      </van-panel>
  </div>
</template>

<script>
import NavBar from "@/components/commom/NavBar.vue"

export default {
  components: {
    NavBar
  },
  data() {
    return {
        login:"购电宝",
        list:[
        { name: "需求总量", value: "54" },
        { name: "长协电量", value: "504" },
        { name: "竞价电量", value: "554" }
        ],
        names:[
        { name: "节省电费", value: "56254" },
        { name: "需求总量", value: "56254" },
        { name: "实际用电量", value: "56254" },
        { name: "偏差电量", value: "56254" }
        ]
    };
  }
};
</script>


<style scoped>
.Gdpage {
  margin: 10px;;
}
.van-grid-item span {
  font-size: 12px;
}
.van-cell {
  background-color: #2ea3f9;
}
.zt {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ebedf0;
}
.zt span {
  margin: 20px;
}
</style>