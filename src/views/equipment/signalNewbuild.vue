<template>
  <div class=" publicBox" id="equipmentNewbuildCSS">
    <div class="head_text">
        <p>通信模块管理/新建</p>
    </div>
<el-form ref="form" label-position="left" label-width="181px" class="demo-form-inline">
  <el-form-item label="芯片型号" prop="deviceModel">
            <el-input class="pubSerIpt" v-model="equipment"  placeholder="请输入芯片型号"></el-input>
  </el-form-item>
    <el-form-item label="IMEI" prop="deviceName">
            <el-input class="pubSerIpt" v-model="equipmentname" placeholder="请输入芯片IEMI型号"></el-input>
  </el-form-item>
  <el-form-item label="适配终端" :required="false">
  <el-select v-model="value" placeholder="洗衣机" class="pubSltL">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
    <el-form-item label="芯片供应商" :required="false">
  <el-select v-model="value_a" placeholder="上海加糖科技有限公司" class="pubSltL">
    <el-option
      v-for="item in selects"
      :key="item.value_a"
      :label="item.label"
      :value="item.value_a">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item class="item_box">
            <el-button class="pubBtnBlue pubbtnR" type="primary">提交</el-button>
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
    // :rules="rules" :model="ruleForm"
    //   ruleForm:{
    //         deviceModel:'',
    //         deviceName:''
    //       },
    //   rules: {
    //    deviceModel: [
    //         { required: true, message: '请输入设备型号', trigger: 'blur' },
    //       ],
    //     deviceName:[
    //         { required: true, message: '请输入设备名称', trigger: 'blur' }, 
    //       ]
    //   },
        value:'',
         options: [{
          value: '选项1',
          label: '洗衣机'
        }, {
          value: '选项2',
          label: 'miniKTV'
        }, {
          value: '选项3',
          label: '自动售货机'
        }, {
          value: '选项4',
          label: '网咖'
        }, {
          value: '选项5',
          label: '多媒体控制盒'
        }],
         value_a:'',
         selects: [{
          value: '选项1',
          label: '上海加糖科技有限公司'
        }, {
          value: '选项2',
          label: '深圳华芯科技有限公司'
        }],
        equipment:'',
        equipmentname:''
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {


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
        width: 140px;
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