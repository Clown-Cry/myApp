<template>
  <div class="monitor">
    <NavBar :title = login></NavBar>
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit">
      <van-card class="card" v-for="(item,index) in list1" :key="index" desc="描述信息">
        <div class="card_title" slot="title">{{item.title}}</div>
        <div class="card_desc" slot="desc">计量点编号:{{item.time}}</div>
        <div class="card_add" slot="num" @click="onclick">
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
      </van-card>
      <van-icon class="add" @click="change" name="add-o">
        <b>新增计量点</b>
      </van-icon>
      <van-popup :style="{ width:'300px', height: '300px' }" v-model="show" :round="flag">
        <p style="text-align:center; padding:10px 0px;">新增计量点</p>
        <van-cell-group>
          <van-field
            v-model="name"
            clearable 
            label="计量点名称"
            placeholder="请输入计量点名称"
          />

          <van-field 
          v-model="number" 
          label="计量点编号" 
          placeholder="请输入计量点编号" 
          />
          <van-field 
          v-model="capacity" 
          label="变压器容量"
          placeholder="请输入变压器容量" 
          />
          <div class="btn">
            <van-button
              type="primary"
              @click="onButtonSubmit"
              size="large"
              style="border-radius:5px;height:30px;line-height:30px;background-color:#53d192;"
            >登录</van-button>
          </div>
        </van-cell-group>
      </van-popup>
            <van-popup :style="{ width:'300px', height: '300px' }" v-model="show" :round="flag">
        <p style="text-align:center; padding:10px 0px;">新增计量点</p>
        <van-cell-group>
          <van-field
            v-model="name"
            clearable 
            label="计量点名称"
            placeholder="请输入计量点名称"
          />

          <van-field 
          v-model="number" 
          label="计量点编号" 
          placeholder="请输入计量点编号" 
          />
          <van-field 
          v-model="capacity" 
          label="变压器容量"
          placeholder="请输入变压器容量" 
          />
          <div class="btn">
            <van-button
              type="primary"
              @click="onButtonSubmit"
              size="large"
              style="border-radius:5px;height:30px;line-height:30px;background-color:#53d192;"
            >登录</van-button>
          </div>
        </van-cell-group>
      </van-popup>
    </van-address-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag:true,
      name:'',
      number:'',
      capacity:'',
      show: false,
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "惠州市蓝微电子有限公司",
          tel: "(" + "031300212345" + ")"
        }
      ],
      list1: [
        { title: "计量1", time: "031300212345", id: 0 },
        { title: "计量2", time: "031300212345", id: 1 },
        { title: "计量3", time: "031300212345", id: 2 },
        { title: "计量4", time: "031300212345", id: 3 },
        { title: "计量5", time: "031300212345", id: 4 },
        { title: "计量6", time: "031300212345", id: 5 },
        { title: "计量7", time: "031300212345", id: 6 }
      ]
    };
  },

  methods: {
    onAdd() {
      console.log("新增地址");
    },

    onEdit(item, index) {
      console.log("编辑地址:" + index);
    },
    onclick() {},
    change() {
      this.show = true;
    },
    onButtonSubmit(){}
  }
};
</script>
 
<style>
.add {
  color: #01b4fb;
  margin: 0px 10px;
  display: block;
}
.add b {
  padding-left: 10px;
  line-height: 16px;
}
</style>