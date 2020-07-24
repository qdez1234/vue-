<template>
  <div class="publicBox" id="stockAddCss">

<el-form ref="form" :model="ruleForm" :rules="rules" class="demo-form-inline publicEditFrom" label-width="180px" label-position="left">

<el-row>
               <p class="pubPageTagP">库存管理/设备入库</p>
</el-row>

<el-row>
         <el-form-item label="设备品牌" :required="true">
                              <el-select v-model="value" placeholder="TCL" class="pubSltL">
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
         <el-form-item label="设备型号" :required="true">
                              <el-select v-model="value_a" placeholder="XCG-800" class="pubSltL">
                                <el-option
                                v-for="item in selsects"
                                :key="item.value_a"
                                :label="item.label_a"
                                :value="item.value_a">
                                </el-option>
                            </el-select>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="设备类型" :required="true">
                              <el-select v-model="value_b" placeholder="洗衣机" class="pubSltL">
                                <el-option
                                v-for="item in stocks"
                                :key="item.value_b"
                                :label="item.label_b"
                                :value="item.value_b">
                                </el-option>
                            </el-select>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="设备名称" :required="true">
                              <el-select v-model="value_c" placeholder="滚筒八公斤" class="pubSltL">
                                <el-option
                                v-for="item in names"
                                :key="item.value_c"
                                :label="item.label_c"
                                :value="item.value_c">
                                </el-option>
                            </el-select>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="SN"  prop="number">
                 <el-input class="pubSerIpt" v-model.number="ruleForm.number"  placeholder="请输入设备SN号"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="供应商" :required="true">
                              <el-select v-model="value_d" placeholder="上海加糖科技有限公司" class="pubSltL">
                                <el-option
                                v-for="item in companys"
                                :key="item.value_d"
                                :label="item.label_d"
                                :value="item.value_d">
                                </el-option>
                            </el-select>
       </el-form-item>
</el-row>

<el-row class="pubSubmitBtn-row">
            <el-button class="pubBtnBlue" type="primary" @click="submitForm('form')">提交</el-button>
            <el-button class="pubBtnGray"  type="primary">取消</el-button>

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
          number:''
      },
      rules:{
          number:[
              { required: true, message: '请输入SN号', trigger: 'blur' },
          ]
      },
      options: [{
          value: '选项1',
          label: 'TCL'
        }, {
          value: '选项2',
          label: '美的'
        }, {
          value: '选项3',
          label: '夏普'
        }],
        selsects: [{
          value_a: '选项1',
          label_a: 'XCG-008'
        }],
        stocks: [{
          value_b: '选项1',
          label_b: '洗衣机'
        }, {
          value_b: '选项2',
          label_b: 'miniKTV'
        }, {
          value_b: '选项3',
          label_b: '自动售货机'
        }, {
          value_b: '选项4',
          label_b: '网咖'
        }, {
          value_b: '选项5',
          label_b: '多媒体控制盒'
        }],
        names: [{
          value_c: '选项1',
          label_c: '运营库'
        }, {
          value_c: '选项2',
          label_c: '维修库'
        }, {
          value_c: '选项3',
          label_c: '报损库'
        }],
        companys: [{
          value_d: '选项1',
          label_d: '上海加糖科技有限公司'
        }, {
          value_d: '选项2',
          label_d: '深圳华芯科技有限公司'
        }],
        value: '',
        value_a: '',
        value_b: '',
        value_c: '',
        value_d: ''

    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {
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
#stockAddCss{
        .el-form-item__error {
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 20%;
    left: 37%;
}
}

</style>