<template>
  <div class="publicBox" id="shoperNewbuildCss">

<el-form ref="form" :model="ruleForm"  class="demo-form-inline publicEditFrom" :rules="rules" label-width="160px" label-position="left">

<el-row>
     <div class="pubPageTagP">
               <p>门店管理/新建</p>
     </div>
</el-row>

<el-row>
         <el-form-item label="门店名称" prop="name">
                 <el-input class="pubSerIpt" v-model="ruleForm.name"  placeholder="请输入门店名称"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="门店地址" prop="address">
                 <el-input class="pubSerIpt" v-model="ruleForm.address"  placeholder="请输入门店地址"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="门店经纬度" prop="latitude">
                 <el-input class="pubSerIpt" v-model.number="ruleForm.latitude"  placeholder="请输入门店经纬度"></el-input>
                 <a href="#" style="color:#617ADA">经纬度查询</a>
       </el-form-item>
       
</el-row>

<el-row>
        <el-form-item label="所在区域" :required="true" class="label_right" >
        <el-select v-model="value" placeholder="富士康龙华北区" class="pubSlt200">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value" 
            >
            </el-option>
        </el-select>
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
        value:'',
         options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '富士康龙华北区'
        }, {
          value: '选项3',
          label: '富士康龙华南区'
        }, {
          value: '选项4',
          label: '富士康烟台厂区'
        }, {
          value: '选项5',
          label: '富士康青岛厂区'
        },
        {
          value: '选项6',
          label: '富士康观澜厂区'
        }],
     ruleForm:{
      name:"",
      address:"",
      latitude:"",
      personal:"",
      phone:"",
     },
      rules: {
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
          address: [
            {required: true, message: '请输入手机号码', trigger: 'blur' }
          ],
          latitude: [
            {required: true, message: '请输入用户ID', trigger: 'blur' }
          ],
          personal: [
            {required: true, message: '请输入身份证号码', trigger: 'blur' }
          ],
          phone: [
            {required: true, message: '请输入手机号码', trigger: 'blur' },
            { type: 'number', message: '年龄必须为数字值'}
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