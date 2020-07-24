<template>
  <div class=" publicBox" id="serviceNewbuildCsss">

<el-form ref="form" :model="ruleForm"  class="demo-form-inline publicEditFrom" :rules="rules" label-width="160px" label-position="left">

<el-row>
     <div class="pubPageTagP">
               <p>服务项目管理/新建</p>
     </div>
</el-row>

<el-row>
         <el-form-item label="服务项目名称" prop="acnt">
                 <el-input class="pubSerIpt" v-model="ruleForm.acnt"  placeholder="请输入服务项目名称"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="服务项目时长" prop="time">
                   <el-select v-model="ruleForm.time" filterable placeholder="0" class="pubSlt60">
                       <el-option
                         v-for="item in RootOptions"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
                       </el-option>
                   </el-select>
                   H
                   <el-select v-model="ruleForm.time" filterable placeholder="0" class="pubSlt60">
                       <el-option
                         v-for="item in RootOptions"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
                       </el-option>
                   </el-select>
                   M
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="适用设备类型" prop="types">
                   <el-select v-model="ruleForm.types" filterable placeholder="洗衣机" class="pubSlt200">
                       <el-option
                         v-for="item in RootOptions"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
                       </el-option>
                   </el-select>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="适用设备型号" prop="typex">
                   <el-select v-model="ruleForm.typex" filterable placeholder="CXG-800G" class="pubSlt200">
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
     RootOptions: [],
     ruleForm:{
      acnt:"",
      time:'',
      types:'',
      typex:''
     },
      rules: {
          acnt: [
            {required: true, message: '请输入服务项目名称', trigger: 'blur' }
          ],
           time: [
            {required: true, message: '请选择服务时长', trigger: 'blur' }
          ],
          types: [
            {required: true, message: '请选择设备类型', trigger: 'blur' }
          ],
           typex: [
            {required: true, message: '请选择设备型号', trigger: 'blur' }
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
           console.log(this.$route)
 
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