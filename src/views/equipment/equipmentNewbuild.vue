<template>
  <div class=" publicBox" id="equipmentNewbuildCSS">
    <div class="head_text">
        <p>供应商管理/新建</p>
    </div>
<el-form ref="form" :rules="rules" :model="ruleForm" label-position="left" label-width="181px" class="demo-form-inline">
  <el-form-item label="设备类型" :required="true">
  <el-select v-model="value" placeholder="全部" class="pubSltL">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="设备型号"  prop="deviceModel">
            <el-input class="pubIptB" v-model="ruleForm.deviceModel"  placeholder="请输入设备型号"></el-input>
  </el-form-item>
    <el-form-item label="设备名称"  prop="deviceName">
            <el-input class="pubIptB" v-model="ruleForm.deviceName" placeholder="请输入设备名称"></el-input>
  </el-form-item>

  <el-form-item class="item_box">
            <el-button class="pubBtnBlue pubbtnR" type="primary" @click="submitForm('form')">提交</el-button>
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
      ruleForm:{
            deviceModel:'',
            deviceName:''
          },
      rules: {
       deviceModel: [
            { required: true, message: '请输入设备型号', trigger: 'blur' },
          ],
        deviceName:[
            { required: true, message: '请输入设备名称', trigger: 'blur' }, 
          ]
      },
        disable:'',
        value:'',
         options: [{
          value: '选项1',
          label: '全部'
        }, {
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
@import "../../styles/less/public.less";
  #equipmentNewbuildCSS{
      .head_text{
        margin-bottom: 5px;
        width: 118px;
        font-size:16px;
        margin-top:17px;
        margin-bottom: 14px;
        p{
            color: #a7a7a7;
        }
    }
    .el-radio__inner{
      width: 20px;
      height: 20px;
    }
    .pubbtnR{
      margin-right: 22px;
    }
    .item_box{
      margin-top: 67px;
    }
    .el-form-item__error {
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 20%;
    left: 20%;
}
  }
</style>