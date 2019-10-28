<template>
  <div class="scan">
    <NavBar :title = login></NavBar>
    <van-cell-group>
      <p class="p">电表名称</p>
      <van-cell-group>
        <van-field v-model="name" placeholder="请输入电表名称" />
      </van-cell-group>
      <p class="p">监测配置</p>
      <van-cell-group>
        <van-field label="PT变比" v-model="PT" placeholder="请输入PT变比" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="CT变比" v-model="CT" placeholder="请输入CT变比" />
      </van-cell-group>
      <van-button
        type="info"
        size="large"
        style="border-radius:5px;height:30px;line-height:30px;"
        @click="onClickButtonSubmit"
      >保存</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import NavBar from "@/components/commom/NavBar.vue"
export default {
  components:{
    NavBar
  },
  props: {
    outdata: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      login:'增加电表',
      name: "",
      PT:'',
      CT:'',
    };
  },
  mounted() {
    this.change();
  },
  methods: {
    change() {
      this.$emit("input", "新增电表");
    },
    onClickButtonSubmit(name,PT,CT) {
    console.log(this.name);
    console.log(this.PT);
    console.log(this.CT);
  }
  },

};
</script>

<style scoped>
.p {
     padding: 0px 10px;
     color: #b2b3b5;
 }

</style>