<template>
  <div class="publicBox" id="priceNewbuildCSS">

<el-form ref="form" :rules="rules" :model="ruleForm" label-position="left" label-width="181px" class="demo-form-inline publicEditFrom">

<el-row>
     <div class="pubPageTagP">
               <p>订单管理/新建</p>
     </div>
</el-row>

<el-row>
    <el-form-item label="设备型号"  prop="deviceModel">
            <el-input class="pubSerIpt" v-model="ruleForm.deviceModel"  placeholder="请输入设备型号"></el-input>
  </el-form-item>
</el-row>

<el-row>
  <el-form-item label="适用设备类型" prop="types"  class="label_right">
  <el-select v-model="value" placeholder="洗衣机" class="pubSltL">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
</el-row>

<el-row>
    <el-form-item label="适用设备型号" prop="number"  class="label_right">
  <el-select v-model="value_a" placeholder="XCG-8000G" class="pubSltL">
    <el-option
      v-for="item in options_a"
      :key="item.value_a"
      :label="item.label_a"
      :value="item.value_a">
    </el-option>
  </el-select>
  </el-form-item>
       
</el-row>

<el-row>
 <el-form-item label="适用区域" >
     <el-checkbox v-model="checked">所有</el-checkbox>
     <el-checkbox v-model="checked">富士康龙华南区</el-checkbox>
     <el-checkbox v-model="checked">富士康龙华北区</el-checkbox>
     <el-checkbox v-model="checked">富士康烟台厂区</el-checkbox>
     <el-checkbox v-model="checked">富士康青岛厂区</el-checkbox>
     <el-checkbox v-model="checked">富士康郑州厂区</el-checkbox>
 </el-form-item>
</el-row>

<el-row class="pubSubmitBtn-row">
  <el-form-item>
            <el-button class="pubBtnBlue" type="primary" @click="submitForm('form')">提交</el-button>
            <el-button class="pubBtnGree"  type="primary">取消</el-button>
  </el-form-item>
</el-row>

</el-form>
    
  </div>
</template>

<script>

export default {
  components: {


  },
  data() {
    return {
    checked:'',
      ruleForm:{
            deviceModel:'',
            types:'',
            number:''
          },
      rules: {
       deviceModel: [
            { required: true, message: '请输入设备型号', trigger: 'blur' },
          ],
        types:[
            { required: true, message: '请选择设备类型', trigger: 'blur' }, 
          ],
          number:[
            { required: true, message: '请选择设备型号', trigger: 'blur' }, 
          ]
      },
        disable:'',
        value:'',
         options: [{
          value: '选项2',
          label: '洗衣机'
        }, {
          value: '选项3',
          label: 'miniKTV'
        }, {
          value: '选项4',
          label: '自动售货机'
        }, {
          value: '选项5',
          label: '网咖'
        },
        {
          value: '选项6',
          label: '多媒体控制盒'
        }],
        value_a:'',
         options_a: [{
          value_a: '选项1',
          label_a: 'XCG-8000G'
        }],
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {
    submitForm() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }

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

</style>