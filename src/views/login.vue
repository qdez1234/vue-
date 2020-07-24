<template>
  <div class="warp " @click="warpFn()" id="loginCss">
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
import axios from 'axios'
export default {
  components: {
     agGrid
  },
  data() {
    return {
      ruleForm:{
        userName:'',
        userPassworld:''
      },
      rules: {
       userName: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
        userPassworld:[
            { required: true, message: '请输入密码', trigger: 'blur' }, 
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
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
                let params=new FormData();
                params.append("key","123456")
                params.append("pwd","6-2b-2c-2d-2e-2f-30")
                this.$store.dispatch("changeLogin",params).then((res)=>{
                  console.log(res,'resresrr')
                  if(res.IsPositive){
                            this.$message.success({message: '登录成功'});
                            this.$router.push({ path: 'index' })
                  }else{    this.$message.success({message: res.Error})}
                }).catch(error=>{})
          }else {
            return false;
          }
        });


        
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
<style lang="less">
   #loginCss{
    .el-form-item__error{
      top: 80%;
    }
   }
</style>

<style lang="less" scoped>
  .el-form-item__error{
    top: 80%;
  }
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


