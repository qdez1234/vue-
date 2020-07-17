<template>
  <div class="warp" @click="warpFn()">
     <agGrid  :columnDefs="columnDefs" :rowData="rowData"></agGrid>
    <div class="box">
      <p class="text_a">E-Sharing运营管理平台</p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item label="" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="账户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="userPassworld">
          <el-input v-model="ruleForm.userPassworld" placeholder="账户密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="warning" @click="login()">登录</el-button>
      <p class="text" @click="forget()">忘记密码</p>
    </div>
  </div>
</template>

<script>
import agGrid from "@/components/agGrid"
export default {
  components: {
     agGrid
  },
  data() {
    return {
      ruleForm:{
        userName:'',
        userPassworld:'',
      },
      rules: {
       userName: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' },
            {
            pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: 'blur'
            }
          ],
        userPassworld:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' },
            {pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/,
             message: "密码是数字加字母组成",
             trigger: 'blur'
            }
          ]
      }
    }
    
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {
    login(){
     this.$router.push({ path: 'index' })
    },
    forget(){
    },
    warpFn(){
      this.typ=true
      let that = this
      setTimeout(function(){
        that.typ=false
      },200)
    }

  },
  created() {
            this.columnDefs = [
                {headerName: 'Make', field: 'make',},
                {headerName: 'Model', field: 'model'},
                {headerName: 'Price', field: 'price'}
            ];

           this.rowData = [
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000}
        ]

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
<style scoped>
  .warp{
    width:100%;
    height:100vh;
    position: relative;
    background-image : url("../assets/pc_bg.jpg");
  }
  .box{
    width :500px;
    height :400px;
    position : absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .text_a{
    left: 565px;
    top: 220px;
    width: 314px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    font-size: 30px;
    text-align: center;
    margin : 0 auto;
    margin-bottom:55px;

  }
  .el-input{
    width : 500px;
    height :50px;
    /* margin-top :20px; */
  }
  .el-input:focus{
    color:red;
  }
  .el-button{
    width: 499px;
    height: 50px;
    border-radius: 8px;
    background-color: rgba(245, 93, 84, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(245, 93, 84, 1);
    margin-top:20px;
  }
  .text{
    width: 240px;
    height: 43px;
    line-height: 29px;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    text-align: center;
    font-family: Roboto;
    margin-left :260px;
    margin-top:10px;
  }
</style>


