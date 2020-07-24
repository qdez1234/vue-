<template>
  <div class=" publicBox" id="accountEdit">

<el-form ref="form" :model="ruleForm"  class="demo-form-inline publicEditFrom" :rules="rules" label-width="160px" label-position="left">

<el-row>
     <div class="pubPageTagP">
               <p>账号管理/新建</p>
     </div>
</el-row>

<el-row>
         <el-form-item label="ID" prop="acnt">
                 <el-input class="pubSerIpt" v-model="ruleForm.acnt" v-if="!disabledFlag" placeholder="请输入ID"></el-input>
                 <p v-else>{{ruleForm.acnt}}</p>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="姓名" prop="name">
                 <el-input class="pubSerIpt" v-model="ruleForm.name" v-if="!disabledFlag" placeholder="请输入姓名"></el-input>
                 <p v-else>{{ruleForm.name}}</p>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="手机号码" prop="mphone">
                 <el-input class="pubSerIpt" v-model.number="ruleForm.mphone"  placeholder="请输入手机号码"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="角色权限" prop="pid">
                   <el-select v-model="ruleForm.pid" filterable placeholder="请选择" class="pubSlt200">
                       <el-option
                         v-for="item in RootOptions"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
                       </el-option>
                   </el-select>
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

import * as Api from '@api/system.js'
export default {
  components: {


  },
  data() {
    return {
     disabledFlag:false,
     RootOptions: [],
     ruleForm:{
      mphone:"",
      name:"",
      acnt:"",
      pid:""
     },
      rules: {
          mphone: [
            {required: true, message: '请输入手机号码', trigger: 'blur' },
            { type: 'number', message: '手机号码必须为数字'}
          ],
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          acnt: [
            {required: true, message: '请输入ID', trigger: 'blur' }
          ],
          pid: [
            {required: true, message: '请选择角色权限', trigger: 'blur' }
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
       },
       async getRoot(){   //获取用户权限
             let res=await Api.getRootApi()
             if(res.IsPositive){
                   this.RootOptions=res.Data.records
                   this.ruleForm.pid=res.Data.records[0].id
             }else this.$message.warning("获取用户权限失败")
        },
       async addAccount(){   //添加账号
             let res=await Api.addAccountApi(this.ruleForm)
             if(res.IsPositive){
                   this.$message.success("添加成功");
                   this.$router.push({path:"/platform/system/account"})
             }else this.$message.warning("添加失败")
       },
       submitForm() {
           this.$refs["form"].validate((valid) => {
            if (valid) {
                    this.addAccount()
            } else {
              return false;
            }
        });
       }

  },
  created() {
           this.getRoot()
           if(Object.keys(this.$route.query).length>0){              //ES6写法, Object.keys(targetObject)  将对象的key作为一个数组返回
                  this.disabledFlag=true
           }
 
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