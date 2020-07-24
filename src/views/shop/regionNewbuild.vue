<template>
  <div class="publicBox" id="regionNewbuildCss">

<el-form ref="form" :model="ruleForm"  class="demo-form-inline publicEditFrom" :rules="rules" label-width="160px" label-position="left">

<el-row>
     <div class="pubPageTagP">
               <p>区域管理/新建</p>
     </div>
</el-row>

<el-row>
         <el-form-item label="区域编码" prop="number">
                 <el-input class="pubSerIpt" v-model="ruleForm.number"  placeholder="请输入门店名称"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="区域名称" prop="name">
                 <el-input class="pubSerIpt" v-model="ruleForm.name"  placeholder="请输入门店地址"></el-input>
       </el-form-item>
</el-row>

<el-row>
        <el-form-item label="区域城市" :required="true" class="label_right" >
        <el-select v-model="value" placeholder="深圳市" class="pubSlt200">
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
         <el-form-item label="详细地址" prop="address">
                 <el-input class="pubSerIpt" v-model.number="ruleForm.address"  placeholder="请输入门店经纬度"></el-input>
       </el-form-item>
       
</el-row>

<el-row>
         <el-form-item label="覆盖范围" prop="range">
                 <el-input class="pubSerIpt" v-model.number="ruleForm.range"  placeholder="请输入区域覆盖范围，多项请用逗号“，”隔开"></el-input>
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
          label: '深圳市'
        }, {
          value: '选项2',
          label: '烟台市'
        }, {
          value: '选项3',
          label: '青岛市'
        }, {
          value: '选项4',
          label: '郑州市'
        }],
     ruleForm:{
      number:'',
      name:"",
      address:"",
      Range:"",
      personal:"",
      phone:"",
     },
      rules: {
          number: [
            { required: true, message: '请输入区域编码', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入区域名称', trigger: 'blur' },
          ],
          address: [
            {required: true, message: '请输入区域详细地址', trigger: 'blur' }
          ],
          range: [
            {required: true, message: '请输入请输入区域覆盖范围，多项请用逗号“，”隔开用户ID', trigger: 'blur' }
          ],
          personal: [
            {required: true, message: '请输入该区域负责人', trigger: 'blur' }
          ],
          phone: [
            {required: true, message: '请输入负责人手机号码', trigger: 'blur' }
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