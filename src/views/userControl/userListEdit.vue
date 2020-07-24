<template>
  <div class=" publicBox" id="userListEdit">

<el-form ref="form" :model="ruleForm"  class="demo-form-inline publicEditFrom" :rules="rules" label-width="160px" label-position="left">

<el-row>
     <div class="pubPageTagP">
               <p>用户列表/新建测试用户</p>
               <p style="color:#F74747;margin-top:5px">新建用户只能建立测试用户，正式用户无法创建！</p>
     </div>
</el-row>

<el-row>
         <el-form-item label="昵称" prop="name">
                 <el-input class="pubSerIpt" v-model="ruleForm.name"  placeholder="请输入昵称"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="姓名" prop="userName">
                 <el-input class="pubSerIpt" v-model="ruleForm.userName"  placeholder="请输入姓名"></el-input>
       </el-form-item>
</el-row>
<el-row>
         <el-form-item label="性别" prop="userSex">
                   <el-radio v-model="ruleForm.userSex" label="1">男</el-radio>
                   <el-radio v-model="ruleForm.userSex" label="2">女</el-radio>
       </el-form-item>
</el-row>


<el-row>
         <el-form-item label="手机号码" prop="phone">
                 <el-input class="pubSerIpt" v-model.number="ruleForm.phone"  placeholder="请输入手机号码"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="身份证号码" prop="userCard">
                 <el-input class="pubSerIpt" v-model="ruleForm.userCard"  placeholder="请输入身份证号码"></el-input>
       </el-form-item>
</el-row>

<el-row class="pubSubmitBtn-row">
           <el-form-item>
                             <el-button class="pubBtnGree" type="primary">提交</el-button>
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
      name:"",
      phone:"",
      userName:"",
      userSex:"1",
      userCard:"",
     },
      rules: {
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
          phone: [
            {required: true, message: '请输入手机号码', trigger: 'blur' },
            { type: 'number', message: '年龄必须为数字值'}
          ],
          userName: [
            {required: true, message: '请输入用户ID', trigger: 'blur' }
          ],
          userCard: [
            {required: true, message: '请输入身份证号码', trigger: 'blur' }
          ],
          userSex: [
            {required: true, message: '请输选择性别', trigger: 'blur' }
          ],
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