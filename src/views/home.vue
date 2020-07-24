<template>
  <div class="warp">

<div class="contentBox">
<div class="upper_box">
      <p class="title">E-Sharing运营管理平台</p>
      <div class="upper_right">
        <p class="name">姓名：{{name}}</p>
        <p class="iconfont icon-tuichu"></p>
      </div>
    </div>

    <div class="big_box">
      <div v-for="(item,id) in boxArr " :key="id" :style="item.bg" class="box" @click="goRouterFn(item.id)">
        <p class="box_text">{{item.admin}}</p>
        <p :class="'iconfont'+' '+item.icon" class="icon_text" ></p>
      </div>
    </div>
</div>

</div>
</template>

<script>
export default {
  components: {


  },
  data() {
    return {
      name:"张三",
      boxArr:[
        {bg:'background:#358FFE',
        admin:'设备管理',
        icon:'icon-diannao',
        id:1,},
        {bg:'background:#B982EA',
        admin:'门店管理',
        icon:'icon-fangzihouse128',
        id:2,},
        {bg:'background:#FFA726',
        admin:'运营管理',
        icon:'icon-shuaxin',
        id:3,},
        {bg:'background:#6CC4DE',
          admin:'APP管理',
        icon:'icon-ziyuan'},
        {bg:'background:#62B063',
          admin:'订单管理',
        icon:'icon-dingdan'},
        {bg:'background:#A3C87B',
          admin:'财务管理',
        icon:'icon-yinxingqia'},
        {bg:'background:#90C5F7',
          admin:'用户管理',
        icon:'icon-zy_qunzuduoren'},
        {bg:'background:#A7A7A7',
          admin:'系统管理',
        icon:'icon-shezhi'}
      ]
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {
        goRouterFn(index){
          if(index==1){
            this.$router.push({path:"/platform/equipment/supplier"})
          }
        }

  },
  created() {


  },
  mounted() {


  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="less" scoped>
  @import "../styles/less/public.less";
  .warp{
    height: 100vh;
    background-image: url("../assets/pc_bg.jpg");
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .contentBox{
    width: @contentWidth;
  }
  .upper_box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
  }
  .title{
    height: 54px;
    color: rgba(255, 255, 255, 1);
    font-size: 36px;
    text-align: left;
  }
  .upper_right{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .name{
    width: 140px;
    height: 41px;
    color: rgba(255, 255, 255, 1);
    font-size: 28px;
    text-align: left;
    margin-right: 64px;
  }
  .icon-tuichu{
    left: 1342px;
    top: 55px;
    width: 40px;
    height: 40px;
    color: rgba(255, 255, 255, 1);
    font-size: 40px;
    cursor: pointer;
  }
  .big_box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 72px;
  }
  .box{
    width: 302.5px;
    height: 214px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 72px;
    border-radius: 10px;
    box-shadow:1px 1px 10px #4366A6,1px -1px 10px #4366A6,-1px 1px 10px #4366A6,-1px -1px 10px #4366A6;
    position: relative;
    cursor: pointer;

  }
  .box_text{
    line-height: 44px;
    color: rgba(255, 255, 255, 1);
    font-size: 30px;
    margin-left: 30px; 
    margin-top: 5px;
  }
  .icon_text{
    opacity: 0.5;
    color: rgba(255, 255, 255, 1);
    font-size: 55px;
    margin-left: 120px;
    position: absolute;
    right: 10px ;
    bottom: 10px ;
  }
</style>