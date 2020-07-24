<template>
  <div class=" publicBox" id="signalCSS">
    <div class="boxItem " id="publicSearch">      

<el-form ref="form" :inline="true"  class="demo-form-inline">
    <el-row>
  <el-form-item label="IEMI号">
            <el-input class="pubIptB" v-model="input"  placeholder="请输入模块IEMI"></el-input>
  </el-form-item>
    <el-form-item label="芯片型号" class="label_right">
            <el-input class="pubIptL" v-model="input"  placeholder="请输入模块芯片型号"></el-input>
  </el-form-item>
    <el-form-item label="适配终端" class="label_right">
            <el-input class="pubIptL" v-model="input"  placeholder="请输入模块适配终端"></el-input>
  </el-form-item >
  <el-form-item label="通信类型" :required="false" class="label_right" >
  <el-select v-model="value" placeholder="全部" class="pubSlt97">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" 
      >
    </el-option>
  </el-select>
  </el-form-item>
 <el-form-item class="label_btn">
            <el-button class="pubBtnBlue" type="primary">查询</el-button>
  </el-form-item>
    </el-row>
<el-row  class="two_form publicBox">
    <el-row class="two_form_item">
        <el-form-item>
            <el-button class="pubBtnGree" type="primary">新增</el-button>
            <el-button class="pubBtnGree" type="primary">批量新增</el-button>
    </el-form-item>
    <el-form-item label="">
        下载批量新增模板|<a href="#" style="color:#617ADA">模块批量新增.xlsx</a>|
    </el-form-item>
    </el-row>
    <el-row  class="two_form_item_a">
        <el-form-item>
            <el-button class="pubBtnBlueL pubBtnBlueL_a" type="primary">导出</el-button>
        </el-form-item>
    </el-row>
    
</el-row>

</el-form>
</div>
          
          <public-table  @handleEdit="handleEdit" :columnDefs="columnDefs" :tableData="tableData" :order=true></public-table>
  </div>
</template>

<script>
import publicTable from "@/components/public/publicTable.vue"

export default {
  components: {
         publicTable
  },
  data() {
    return {
        input:"",
        columnDefs :[
            {headerName: '芯片型号', field: 'zip',width:120},
            {headerName: 'IMEI', field: 'make',width:259},
            {headerName: '适配终端', field: 'price',width:125},
            {headerName: '芯片供应商', field: 'address',width:240},
            {headerName: '通信类型', field: 'model',width:77},
            {headerName: '创建时间', field: 'date',width:120},
            {headerName: '当前状态', field: 'state',width:90}
        ],
        tableData: [{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        },{
          date: '2016-05-03',
          make: '王小虎',
          model: '上海',
          price: '普陀区',
          phone:'13988888888',
          address: '上海市普陀区金沙江路 1518 弄',
          state:'正常',
          zip: 200333
        }],
        value:'',
         options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '2G'
        }, {
          value: '选项3',
          label: '3G'
        }, {
          value: '选项4',
          label: '4G'
        }, {
          value: '选项5',
          label: '5G'
        },
        {
          value: '选项6',
          label: 'wifi'
        }]
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {


  },
  // 监控data中的数据变化
  watch: {


 },
  methods: {
    handleEdit(row){
      this.$router.push({path:"/platform/equipment/supplierEdit",query:{data:row.date}})
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

<style lang='less' scoped>
@import "../../styles/less/public.less";
  #signalCSS{
    .boxItem{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .demo-form-inline{
        align-items: center;
      }
      .itemp{
      font-size: 16px;
      } 
      .label_right{
            margin-left: 28px;
        }
        .label_btn{
            margin-left: 42px;
        }
    }
    .two_form{
        display: block;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .two_form_item{
            width: 1190px;
        }
        .two_form_item_a{
            width: 90px;
        }
    }
  }
</style>