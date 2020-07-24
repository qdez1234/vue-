<template>
  <div class="publicBox" id="equipmentCSS">
          <div class="boxItem " id="publicSearch">

<el-form ref="form" :inline="true"  class="demo-form-inline">
    <el-row>
        <el-form-item label="品牌" prop="deviceModel">
            <el-input class="pubIpt" v-model="brand"  placeholder="请输入设备品牌"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="deviceModel">
            <el-input class="pubIptS" v-model="modele"  placeholder="请输入设备型号"></el-input>
        </el-form-item>
        <el-form-item label="SN" prop="deviceModel">
            <el-input class="pubIptS" v-model="SNnumber"  placeholder="请输入设备SN号"></el-input>
        </el-form-item>
        <el-form-item label="供应商名称">
            <el-select v-model="value" placeholder="全部" class="pubSlt97">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
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
          <public-table class="colum" :btn=[] :columnDefs="columnDefs" :tableData="tableData" :order=true></public-table>
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
        brand:'',
        modele:'',
        SNnumber:'',
        columnDefs :[
            {headerName: '设备ID', field: 'zip',width:110},
            {headerName: '品牌', field: 'make',width:90},
            {headerName: '型号', field: 'price',width:100},
            {headerName: '设备类型', field: 'date',width:100},
            {headerName: '设备名称', field: 'state',width:105},
            {headerName: 'SN', field: 'SN',width:210},
            {headerName: '供应商', field: 'supplier',width:270},
            {headerName: '所在仓库', field: 'stock',width:90},
            {headerName: '入库时间', field: 'timer',width:100}
        ],
        tableData: [{
          date: '洗衣机',
          make: 'TCL',
          price: 'XCG-800G',
          state:'滚筒8公斤',
          zip: '123456789',
          SN:'39984888381',
          supplier:'合肥市TCL家用电器有限公司',
          stock:'成品库',
          timer:'2020/06/01'
        },{
          date: '洗衣机',
          make: 'TCL',
          price: 'XCG-800G',
          state:'滚筒8公斤',
          zip: '123456789',
          SN:'39984888381',
          supplier:'合肥市TCL家用电器有限公司',
          stock:'成品库',
          timer:'2020/06/01'
        },{
          date: '洗衣机',
          make: 'TCL',
          price: 'XCG-800G',
          state:'滚筒8公斤',
          zip: '123456789',
          SN:'39984888381',
          supplier:'合肥市TCL家用电器有限公司',
          stock:'成品库',
          timer:'2020/06/01'
        },{
          date: '洗衣机',
          make: 'TCL',
          price: 'XCG-800G',
          state:'滚筒8公斤',
          zip: '123456789',
          SN:'39984888381',
          supplier:'合肥市TCL家用电器有限公司',
          stock:'成品库',
          timer:'2020/06/01'
        },{
          date: '洗衣机',
          make: 'TCL',
          price: 'XCG-800G',
          state:'滚筒8公斤',
          zip: '123456789',
          SN:'39984888381',
          supplier:'合肥市TCL家用电器有限公司',
          stock:'成品库',
          timer:'2020/06/01'
        },{
          date: '洗衣机',
          make: 'TCL',
          price: 'XCG-800G',
          state:'滚筒8公斤',
          zip: '123456789',
          SN:'39984888381',
          supplier:'合肥市TCL家用电器有限公司',
          stock:'成品库',
          timer:'2020/06/01'
        },{
          date: '洗衣机',
          make: 'TCL',
          price: 'XCG-800G',
          state:'滚筒8公斤',
          zip: '123456789',
          SN:'39984888381',
          supplier:'合肥市TCL家用电器有限公司',
          stock:'成品库',
          timer:'2020/06/01'
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
        }, {
          value: '选项5',
          label: '运营库'
        }],
        value: '',
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

<style lang='less' scoped>
@import "../../styles/less/public.less";
  #equipmentCSS{
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