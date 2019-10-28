<template>
  <div class="population">
    <NavBar :title = login></NavBar>
    <div class="image">
      <van-swipe @change="handleChange" :height="250" class="swipe" indicator-color="#2ea3f9">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="imgs">
      <van-grid :border="true" :column-num="4">
        <van-grid-item>
          <van-icon name="youzan-shield" size="45" color="#01b4fb" />
          <span>购电宝</span>
        </van-grid-item>
        <van-grid-item>
          <van-icon name="printer" size="45" color="#01b4fb" />
          <span>用电宝</span>
        </van-grid-item>
        <van-grid-item>
          <van-icon name="gift-card" size="45" color="#01b4fb" />
          <span>售电套餐</span>
        </van-grid-item>
        <van-grid-item>
          <van-icon name="more" size="45" color="#01b4fb" />
          <span>我的消息</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="center">
      <van-panel title="新闻资讯" color="#2ea3f9">
        <van-card v-for="(user,i) in newData" :key="i">
          <div slot="thumb">
            <div slot="thumb"><img :src="user.img"></div>
          </div>
          <div slot="title" >
            <div slot="title">{{user.title}}</div>
          </div>
          <div slot="desc" class="van-ellipsis">
            <div slot="desc">{{user.content}}</div>
          </div>
        </van-card>
      </van-panel>
      <van-panel title="通知公告">
        <van-card v-for="(user,i) in noticeData" :key="i">
          <div slot="thumb">
            <div slot="thumb"><img :src="user.img"></div>
          </div>
          <div slot="title">
            <div slot="title">{{user.title}}</div>
          </div>
          <div slot="desc" class="van-ellipsis">
            <div slot="desc">{{user.content}}</div>
          </div>
        </van-card>
      </van-panel>
      <van-panel title="政策法规">
        <van-card v-for="(user,i) in policyData" :key="i">
          <div slot="thumb">
            <div slot="thumb"><img :src="user.img"></div>
          </div>
          <div slot="title">
            <div slot="title">{{user.title}}</div>
          </div>
          <div slot="desc" class="van-ellipsis">
            <div slot="title">{{user.content}}</div>
          </div>
        </van-card>
      </van-panel>
    </div>
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
      login:'首页',
      newData: [
        {
          img:
            "http://www.lian-neng.com/information/file/information/info/covery/201812/jpg/20181226042015-b453add2-5a11-433d-800f-12ff043df5e0.jpg",
          title: "我司与中国联通广州分公司签署战略合作协议",
          date: "2019年7月23日",
          content:
            "广州链能信息科技有限公司与中国联合网络通信有限公司广州市分公司签署战略合作协议。中国联合网络通信有限公司（以下简称：中国联通）是分别在纽约、香港、上海三地上市的综合性电信运营企业。中国联通广州市分公司是中国联通最大的本地网分公司，是“广东工业企业上云上平台”最具实力的平台商和服务商"
        },
        {
          img:
            "http://www.lian-neng.com/information/file/information/info/covery/201812/png/20181211021224-ed46db05-7437-41bf-a788-08a00569fe1b.png",
          title: "关于“上云上平台”首批服务券第二次发放的预通知",
          date: "2019年7月23日",
          content:
            "收到省工业和信息化厅融合发展处通知：平台计划于12月12日下午3:00至4:00更新，同时第二次发放服务券"
        }
      ],
      img: "/src/images/lt.jpg",
      content:
        "广州链能信息科技有限公司与中国联合网络通信有限公司广州市分公司签署战略合作协议。中国联合网络通信有限公司（以下简称：中国联通）是分别在纽约、香港、上海三地上市的综合性电信运营企业。中国联通广州市分公司是中国联通最大的本地网分公司，是“广东工业企业上云上平台”最具实力的平台商和服务商",
      noticeData: [
      {
      img:
      "http://www.lian-neng.com/information/file/information/info/covery/201804/jpg/20180419042911-b8b771e1-f65c-4c7a-8cc5-2514f9c5fcec.jpg",
     title: "企业能耗管理模块上线公测",
      date: "2019年7月23日",
      content:
      "2018年4月17日，企业能耗管理模块上线公测，欢迎用电企业试用。能耗管理模块中包含四个子模块，1:综合能耗，2:用电情况",
      }
      ],
    policyData: [
    {
    img:
      "http://www.lian-neng.com/information/file/information/info/covery/201805/png/20180508023747-a971be2d-fd4f-420c-aa33-8914b85dba17.png",
    title: "修订版《重点用能单位节能管理办法》发布",
    date: "2019年7月23日",
    content:
      "广州链能信息科技有限公司与中国联合网络通信有限公司广州市分公司签署战略合作协议。中国联合网络通信有限公司（以下简称：中国联通）是分别在纽约、香港、上海三地上市的综合性电信运营企业。中国联通广州市分公司是中国联通最大的本地网分公司，是“广东工业企业上云上平台”最具实力的平台商和服务商"
    },
    {
    img:
      "http://www.lian-neng.com/information/file/information/info/covery/201804/jpg/20180419053235-61372085-b9a6-4705-b385-6ef73f6a5cc7.jpg",
    title: "广东省电力交易市场电力用户准入流程",
    date: "2019年7月23日",
    content:
      "收到省工业和信息化厅融合发展处通知：平台计划于12月12日下午3:00至4:00更新，同时第二次发放服务券"
    }
    ],
    }
  },
 
  mounted() {
    this.test()
  },
  methods: {
    handleChange(index) {
      this.$toast("当前 Swipe 索引：" + index);
    },
    test() {

//    this.axios.get('/api/wtr-v3/weather/all?latitude=110&longitude=112&isLocated=true&locationKey=weathercn%3A101010100&days=15&appKey=weather20151024&sign=zUFJoAR2ZVrDy1vF3D07&romVersion=7.2.16&appVersion=87&alpha=false&isGlobal=false&device=cancro&modDevice=&locale=zh_cn').then(res => {
//   console.log(res)
// })

    }    
    }
  };
</script>

<style>
.swipe {
  background-color: #2ea3f9;
  margin: 10px;
  border-radius: 5px;
  text-align:center;
}
.van-grid-item span {
  font-size: 12px;
}
.center {
  margin: 10px;
}
.van-cell {
  background-color: #2ea3f9;
}
.van-panel img{
  width: 100%;
}
</style>
