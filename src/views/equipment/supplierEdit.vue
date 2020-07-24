<template>
  <div class="publicBox" id="supplierEditCSS">
    <div class="head_text ">
        <p>供应商管理/编辑</p>
    </div>

<el-form ref="form" label-position="left" label-width="100px" class="demo-form-inline">
  <el-form-item label="供应商ID">
           <p>GY0001</p>
  </el-form-item>
  <el-form-item label="供应商名称" >
           <p>请输入供应商名称</p>
  </el-form-item>
  <el-form-item label="供应商产品">
            <el-input class="pubSerIpt" v-model="equipm"  placeholder="请输入供应商产品"></el-input>
  </el-form-item>
  <el-form-item label="地址">
            <el-input class="pubSerIpt" v-model="address"  placeholder="请输入地址"></el-input>
  </el-form-item>
    <el-form-item label="联系人">
            <el-input class="pubSerIpt" v-model="personal"  placeholder="请输入联系人"></el-input>
  </el-form-item>
     <el-form-item label="联系电话">
            <el-input class="pubSerIpt" v-model="phone"  placeholder="请输入联系电话"></el-input>
  </el-form-item>
    <el-form-item label="状态">
      <el-radio v-model="radio" label="true">启用</el-radio>
      <el-radio v-model="radio" label="false">禁用</el-radio>
  </el-form-item>
  <el-form-item>
            <el-button class="pubBtnBlue" type="primary">保存</el-button>
            <el-button class="pubBtnGree"  type="primary">取消</el-button>
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
      sizeForm:{},
      radio:'true',
      equipm:'',
      personal:'',
      address:'',
      phone:''

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
  #supplierEditCSS{
    .head_text{
      width: 118px;
      font-size:16px;
      margin-top:17px;
      margin-bottom: 8px;
      p{
        color: #a7a7a7;
      }
    }
    .el-form-item{
      .el-form-item__label{
        font-size: 16px;
      }
      p{
        font-size: 16px;
      }
    }
    .el-radio__inner{
      width: 20px;
      height: 20px;
    }
  }
</style>