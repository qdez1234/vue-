<template>
  <div class="publicBox" id="shoperNewbuildCss">

<el-form ref="form" :model="ruleForm"  class="demo-form-inline publicEditFrom" label-width="160px" label-position="left">

<el-row>
     <div class="pubPageTagP">
               <p>门店管理/编辑</p>
     </div>
</el-row>

<el-row>
         <el-form-item label="门店编号" >
                 LH0001
       </el-form-item>
</el-row>


<el-row>
         <el-form-item label="门店名称" >
                 龙华A203
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="门店地址" >
                 深圳市龙华区东环二路富士康科技园A2栋三楼
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="门店经纬度" >
                 114.046165,22.648556
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="所在区域" >
                富士康龙华南区
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="负责人" prop="personal">
                 <el-input class="pubSerIpt" v-model.number="ruleForm.personal"  placeholder="请输入该门店负责人"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="联系电话" prop="phone">
                 <el-input class="pubSerIpt" v-model="ruleForm.phone"  placeholder="请输入负责人联系电话"></el-input>
       </el-form-item>
</el-row>

<el-row class="pubSubmitBtn-row">
           <el-form-item>
                         <el-button class="pubBtnGree" type="primary" @click="submitForm">提交</el-button>
                         <el-button class="pubBtnGray" @click="canCleFn"  type="primary">取消</el-button>
       </el-form-item>
</el-row>

</el-form>
    
  </div>
</template>

<script>

export default {
  components: {


  },
  data() {
    return {
     ruleForm:{
    //   name:"",
    //   address:"",
    //   latitude:"",
      personal:"张某某",
      phone:"13888888888",
     }
    //   rules: {
    //       name: [
    //         { required: true, message: '请输入昵称', trigger: 'blur' },
    //       ],
    //       address: [
    //         {required: true, message: '请输入手机号码', trigger: 'blur' }
    //       ],
    //       latitude: [
    //         {required: true, message: '请输入用户ID', trigger: 'blur' }
    //       ],
    //       personal: [
    //         {required: true, message: '请输入身份证号码', trigger: 'blur' }
    //       ],
    //       phone: [
    //         {required: true, message: '请输入手机号码', trigger: 'blur' },
    //         { type: 'number', message: '年龄必须为数字值'}
    //       ],
    //     }
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {
       canCleFn(){
           this.$router.go(-1)
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

<style lang='less'>


</style>