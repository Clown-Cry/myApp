<template>
  <div class="Ydpage">
    <NavBar :title = login ></NavBar>
    <van-panel title="快捷入口">
      <van-swipe :height="200" indicator-color="#01b4fb">
        <van-swipe-item>
          <van-grid border :column-num="4">
            <van-grid-item @click="safe">
              <van-icon name="youzan-shield" size="45" color="#01b4fb" />
              <span>用电安全</span>
            </van-grid-item>
            <van-grid-item @click="quality">
              <van-icon name="printer" size="45" color="#01b4fb" />
              <span>电能质量</span>
            </van-grid-item>
            <van-grid-item @click="electricity">
              <van-icon name="gift-card" size="45" color="#01b4fb" />
              <span>基本电费</span>
            </van-grid-item>
            <van-grid-item @click="energyManage">
              <van-icon name="more" size="45" color="#01b4fb" />
              <span>能耗管理</span>
            </van-grid-item>
            <van-grid-item @click="electricityCost">
              <van-icon name="gift-card" size="45" color="#01b4fb" />
              <span>用电成本</span>
            </van-grid-item>
            <van-grid-item @click="Room">
              <van-icon name="gift-card" size="45" color="#01b4fb" />
              <span>电房检测</span>
            </van-grid-item>
            <van-grid-item>
              <van-icon name="gift-card" size="45" color="#01b4fb" />
              <span>用电分析</span>
            </van-grid-item>
            <van-grid-item @click="scan">
              <van-icon name="scan" size="45" color="#01b4fb" />
              <!-- <img style="padding-top:9px;width:35px;height:35px;" src="../images/2、电表扫码_05.png"> -->
              <span>扫一扫</span>
            </van-grid-item>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid border :column-num="4">
            <van-grid-item>
              <van-icon name="youzan-shield" size="45" color="#01b4fb" />
              <span>告警事件</span>
            </van-grid-item>
            <van-grid-item>
              <van-icon name="printer" size="45" color="#01b4fb" />
              <span>实时预报</span>
            </van-grid-item>
            <van-grid-item>
              <van-icon name="gift-card" size="45" color="#01b4fb" />
              <span>关口电量</span>
            </van-grid-item>
            <van-grid-item>
              <van-icon name="more" size="45" color="#01b4fb" />
              <span>用电设备</span>
            </van-grid-item>
            <van-grid-item @click="mange">
              <!-- <van-icon name="more" size="45" color="#2ea3f9" /> -->
              <img style="width:45px;height:45px;" src="../images/Snipaste_2019-09-27_09-11-36.png" />
              <span>仪表管理</span>
            </van-grid-item>
            <van-grid-item @click="obj">
              <!-- <van-icon name="more" size="45" color="#2ea3f9" /> -->
              <img style="width:45px;height:45px;" src="../images/obj.png" />
              <span>仪表管理</span>
            </van-grid-item>
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </van-panel>
    <div class="data">
      <van-panel title="概要">
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
    <div class="data2"></div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div class="demo">
      <van-tabs v-model="active">
        <van-tab>
          <div slot="title">
            <van-icon name="more-o" />选项
          </div>
          <div slot="default" v-for="(index, i) in tabData" :key="i">
            <div class="da">
              <van-icon>{{index.name}}</van-icon>
              <van-icon>{{index.value}}</van-icon>
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <van-icon name="notes-o" />选项2
          </div>
          <div slot="default" v-for="(index, i) in tab2Data" :key="i">
            <div class="da">
              <van-icon>{{index.name}}</van-icon>
              <van-icon>{{index.value}}</van-icon>
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <van-icon name="warn-o" />选项3
          </div>
          <div slot="default" v-for="(index, i) in tab3Data" :key="i">
            <div class="da">
              <van-icon>{{index.name}}</van-icon>
              <van-icon>{{index.value}}</van-icon>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/commom/NavBar.vue"

export default {
  // name: "hello",
    components: {
    NavBar
  },
  data() {
    return {
      login:'用电宝',
      active: 0,
      msg: "Welcome to Your Vue.js App",
      list: [{ do: "hhh", in: "564400" }],
      names: [
        { name: "当月电量", value: "56254" },
        { name: "当月电度电费", value: "56254" },
        { name: "当月基本电费", value: "56254" },
        { name: "当月能耗", value: "56254" },
        { name: "上月电量", value: "56254" },
        { name: "上月电度电费", value: "56254" },
        { name: "上月基本电费", value: "56254" },
        { name: "上月能耗", value: "56254" }
      ],
      tabData: [
        { name: "总容量(kva)", value: "954" },
        { name: "本月最大负荷(kW)", value: "505" },
        { name: "本年最大负荷(kW)", value: "554" },
        { name: "历史最大负荷(kW)", value: "254" }
      ],
      tab2Data: [
        { name: "今天(万kWh)", value: "954" },
        { name: "本月(万kWh)", value: "505" },
        { name: "上月(万kWh)", value: "554" },
        { name: "本年(万kWh)", value: "254" }
      ],
      tab3Data: [
        { name: "今天(吨)", value: "954" },
        { name: "本月(吨)", value: "505" },
        { name: "上月(吨)", value: "554" },
        { name: "本年(吨)", value: "254" }
      ]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "电量展示" },
        tooltip: {},
        xAxis: {
          data: ["电量", "当月电度", "能耗", "负荷", "上月电量", "上月能耗"]
        },
        yAxis: {},
        series: [
          {
            name: "负荷",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    safe() {
      this.$router.push("safe");
    },
    quality() {
      this.$router.push("quality");
    },
    electricity() {
      this.$router.push("electricity");
    },
    Room() {
      this.$router.push("Room");
    },
    energyManage() {
      this.$router.push("energyManage");
    },
    electricityCost() {
      this.$router.push("electricityCost");
    },
    scan() {
      this.$router.push("scan");
    },
    mange() {
      this.$router.push("Management");
    },
    obj() {
      this.$router.push('monitor')
    }
  }
};
</script>


<style>
.Ydpage {
  margin: 10px;
}
.van-grid-item span {
  font-size: 12px;
}
.zt {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ebedf0;
}
.zt span {
  margin: 15px;
}
.da {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.da .van-icon {
  margin: 2px 5px;
}
</style>