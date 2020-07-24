<template>
  <div class="publicBox" id="terminalNewbuildCss">

<el-form ref="form"  class="demo-form-inline publicEditFrom" label-width="180px" label-position="left">

<el-row>
               <p class="pubPageTagP">终端设备管理/新建</p>
</el-row>

<el-row>
         <el-form-item label="设备ID">
                 <p>123456789</p>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="品牌">
                <p>TCL</p>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="型号">
                <p>XCG-8080</p>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="设备名称">
                <p>滚筒8公斤</p>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="SN">
                <p>39984888381</p>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="供应商">
                <p>合肥市TCL家用电器有限公司</p>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="绑定通讯模块IMEI">
                 <el-input class="pubSerIpt" v-model="IEMI"  placeholder="请输入昵称"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="绑定设备编码">
                 <el-input class="pubSerIpt" v-model="number"  placeholder="请输入手机号码"></el-input>
       </el-form-item>
</el-row>

<el-row>
         <el-form-item label="所在仓库">
                              <el-select v-model="value" placeholder="运营库" class="pubSlt">
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
         <el-form-item label="所在门店">
                 <el-input class="pubSerIpt" v-model="house"  placeholder="请输入身份证号码"></el-input>
       </el-form-item>
</el-row>

<el-row class="pubSubmitBtn-row">
            <el-button class="pubBtnBlue" type="primary">保存</el-button>
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
      IEMI:'860385748759837',
      house:'SZ0001',
      number:'1034567890',
      options: [{
          value: '选项1',
          label: '运营库'
        }, {
          value: '选项2',
          label: '维修库'
        }, {
          value: '选项3',
          label: '报损库'
        }],
        value: ''

    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {


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
#terminalNewbuildCss{}

</style>