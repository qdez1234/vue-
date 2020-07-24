<template>
  <div class="publicBox" id="terminalCss">
          <div class="boxItem " id="publicSearch">

<el-form ref="form" :inline="true"  class="demo-form-inline">
    <el-row>
        <el-form-item label="设备编码" prop="deviceModel">
            <el-input class="pubIptL" v-model="code"  placeholder="请输入设备编码"></el-input>
        </el-form-item>
        <el-form-item label="品牌" prop="deviceModel">
            <el-input class="pubIpt" v-model="brand"  placeholder="请输入设备品牌"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="deviceModel">
            <el-input class="pubIpt" v-model="modele"  placeholder="请输入设备型号"></el-input>
        </el-form-item>
        <el-form-item label="SN" prop="deviceModel">
            <el-input class="pubIpt" v-model="SNnumber"  placeholder="请输入设备SN号"></el-input>
        </el-form-item>
    </el-row>
    <el-row class="row_item">
        <el-form-item label="所在仓库">
            <el-select v-model="value" placeholder="全部" class="pubSlt97">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="当前状态" class="item_from">
            <el-select v-model="value_a" placeholder="全部" class="pubSlt97">
                <el-option
                v-for="item in options_a"
                :key="item.value_a"
                :label="item.label_a"
                :value="item.value_a">
                </el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="设备类型">
            <el-select v-model="value_b" placeholder="全部" class="pubSlt">
                <el-option
                v-for="item in options_b"
                :key="item.value_b"
                :label="item.label_b"
                :value="item.value_b">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item class="item_btn">
                    <el-button class="pubBtnBlue" type="primary">查询</el-button>
                    <el-button class="pubBtnBlue"  type="primary">新建</el-button>
        </el-form-item>
    </el-row>

</el-form>
          </div>
          <public-table class="colum" :columnDefs="columnDefs" :tableData="tableData" :order=true></public-table>
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
        code:'',
        brand:'',
        modele:'',
        SNnumber:'',
        columnDefs :[
            {headerName: '品牌', field: 'zip',width:70},
            {headerName: '设备名称', field: 'make',width:100},
            {headerName: '设备类型', field: 'price',width:120},
            {headerName: 'SN', field: 'date',width:180},
            {headerName: '供应商ID', field: 'id',width:80},
            {headerName: '绑定通讯模块IMEI', field: 'dome',width:160},
            {headerName: '绑定设备编码', field: 'number',width:148},
            {headerName: '所在仓库', field: 'warehouse',width:80},
            {headerName: '所在门店', field: 'house',width:80},
            {headerName: '状态', field: 'state',width:80}
        ],
        tableData: [{
          date: '39984888381',
          make: '滚筒8公斤',
          price: '洗衣机',
          id:'GY0001',
          zip: 'TCL',
          dome:'860385748759837',
          number:'1034567890',
          warehouse:'运营库',
          house:'SZ0001',
          state:'state'
        },{
          date: '39984888381',
          make: '滚筒8公斤',
          price: '洗衣机',
          id:'GY0001',
          zip: 'TCL',
          dome:'860385748759837',
          number:'1034567890',
          warehouse:'运营库',
          house:'SZ0001',
          state:'state'
        },{
          date: '39984888381',
          make: '滚筒8公斤',
          price: '洗衣机',
          id:'GY0001',
          zip: 'TCL',
          dome:'860385748759837',
          number:'1034567890',
          warehouse:'运营库',
          house:'SZ0001',
          state:'state'
        },{
          date: '39984888381',
          make: '滚筒8公斤',
          price: '洗衣机',
          id:'GY0001',
          zip: 'TCL',
          dome:'860385748759837',
          number:'1034567890',
          warehouse:'运营库',
          house:'SZ0001',
          state:'state'
        },{
          date: '39984888381',
          make: '滚筒8公斤',
          price: '洗衣机',
          id:'GY0001',
          zip: 'TCL',
          dome:'860385748759837',
          number:'1034567890',
          warehouse:'运营库',
          house:'SZ0001',
          state:'state'
        },{
          date: '39984888381',
          make: '滚筒8公斤',
          price: '洗衣机',
          id:'GY0001',
          zip: 'TCL',
          dome:'860385748759837',
          number:'1034567890',
          warehouse:'运营库',
          house:'SZ0001',
          state:'state'
        },{
          date: '39984888381',
          make: '滚筒8公斤',
          price: '洗衣机',
          id:'GY0001',
          zip: 'TCL',
          dome:'860385748759837',
          number:'1034567890',
          warehouse:'运营库',
          house:'SZ0001',
          state:'state'
        }],
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '成品库'
        }, {
          value: '选项3',
          label: '维修库'
        }, {
          value: '选项4',
          label: '报损库'
        }],
        value: '',
        options_a: [{
          value_a: '选项1',
          label_a: '全部'
        }, {
          value_a: '选项2',
          label_a: '空闲中'
        }, {
          value_a: '选项3',
          label_a: '运行中'
        }, {
          value_a: '选项4',
          label_a: '故障中'
        }, {
          value_a: '选项5',
          label_a: '维修中'
        }],
        value_a: '',
        options_b: [{
          value_b: '选项1',
          label_b: '全部'
        }, {
          value_b: '选项2',
          label_b: '洗衣机'
        }, {
          value_b: '选项3',
          label_b: 'miniKTV'
        }, {
          value_b: '选项4',
          label_b: '自动售货机'
        }, {
          value_b: '选项5',
          label_b: '网咖'
        },
        {
          value_b: '选项6',
          label_b: '多媒体控制盒'
        }],
        value_b: ''
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
@import "../../styles/less/public.less";
  #terminalCss{
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
      // .row_item{
      //     margin-top: 8px;
      // }
    } 
    .item_from{
        margin: 0 130px;
    }
    .item_btn{
        margin-left: 49px;
    }
  }
</style>