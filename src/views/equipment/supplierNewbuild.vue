<template>
  <div class="publicBox" id="supplierNewbuildCSS">
    <div class="head_text">
        <p>供应商管理/新建</p>
    </div>

<el-form ref="form" label-position="left" label-width="100px" class="demo-form-inline">
  <el-form-item label="供应商名称">
            <el-input class="pubSerIpt" v-model="allname"  placeholder="请输入供应商全称"></el-input>
  </el-form-item>
  <el-form-item label="供应商产品">
            <el-input class="pubSerIpt"  v-model="allequi"  placeholder="请输入供应商所提供的产品类型，多个使用逗号“，”隔开"></el-input>
  </el-form-item>
    <el-form-item label="地址">
            <el-input class="pubSerIpt" v-model="alladdress"  placeholder="请输入供应商地址"></el-input>
  </el-form-item>
      <el-form-item label="联系人">
            <el-input class="pubSerIpt" v-model="allpersonal"  placeholder="请输入联系人"></el-input>
  </el-form-item>
     <el-form-item label="联系电话">
            <el-input class="pubSerIpt" v-model="allphone"  placeholder="请输入联系电话"></el-input>
  </el-form-item>
    <el-form-item label="状态">
      <el-radio v-model="radio" label="true">启用</el-radio>
      <el-radio v-model="radio" label="false">禁用</el-radio>
  </el-form-item>
  <el-form-item>
            <el-button class="pubBtnBlue" type="primary">查询</el-button>
            <el-button class="pubBtnGree"  type="primary">新建</el-button>
  </el-form-item>
</el-form>

  </div>
</template>

<script>

export default {
  components: {


  },
  data() {
    return {
        disable:'',
        allname:'' ,
        allequi:''  ,
        alladdress:'',
        allpersonal:'',
        allphone:'',
        radio:'true',

    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {


  },
  created() {


  },
  mounted() {


  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='less'>
@import "../../styles/less/public.less";
  #supplierNewbuildCSS{
      .head_text{
        margin-bottom: 5px;
        width: 118px;
        font-size:16px;
        margin-top:17px;
        p{
            color: #a7a7a7;
        }
    }
    .el-radio__inner{
      width: 20px;
      height: 20px;
    }
  }
</style>