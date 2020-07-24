<template>
  <div class="publicBox" id="regionCss">
    <div class="boxItem " id="publicSearch">     
<el-form ref="form" :inline="true"  class="demo-form-inline">
    <el-row>
  <el-form-item label="门店名称">
            <el-input class="pubIpt" v-model="input"  placeholder="请输入门店名称"></el-input>
  </el-form-item>
    <el-form-item label="门店编号" class="label_right">
            <el-input class="pubIptS" v-model="input"  placeholder="请输入门店编号"></el-input>
  </el-form-item>
  <!-- <el-form-item label="所在区域" :required="false" class="label_right" >
  <el-select v-model="value" placeholder="全部" class="pubSlt138">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" 
      >
    </el-option>
  </el-select>
  </el-form-item> -->
 <el-form-item class="label_btn">
            <el-button class="pubBtnBlue" type="primary">查询</el-button>
  </el-form-item>
    </el-row>
<el-row  class="two_form publicBox">
    <el-row class="two_form_item">
        <el-form-item>
            <el-button class="pubBtnGree pubBtnBlueL_a" type="primary">新建</el-button>
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
            {headerName: '区域编号', field: 'num',width:80},
            {headerName: '区域名称', field: 'name',width:130},
            {headerName: '区域城市', field: 'latitude',width:79},
            {headerName: '详细地址', field: 'address',width:260},
            {headerName: '覆盖范围', field: 'region',width:260},
            {headerName: '负责人', field: 'personal',width:68},
            {headerName: '联系电话', field: 'phone',width:120},
            {headerName: '创建时间', field: 'date',width:100}
        ],
        tableData: [{
          num:'LHS',
          name:'富士康龙华南区',
          latitude:'深圳市',
          address:'龙华区东环二路富士康科技园',
          region:'A1-A12栋、B1-B9栋、C1-C11栋',
          personal:'张某某',
          phone:'1388888888',
          date:'2020/06/01'
        },{
          num:'LHS',
          name:'富士康龙华南区',
          latitude:'深圳市',
          address:'龙华区东环二路富士康科技园',
          region:'A1-A12栋、B1-B9栋、C1-C11栋',
          personal:'张某某',
          phone:'1388888888',
          date:'2020/06/01'
        },{
          num:'LHS',
          name:'富士康龙华南区',
          latitude:'深圳市',
          address:'龙华区东环二路富士康科技园',
          region:'A1-A12栋、B1-B9栋、C1-C11栋',
          personal:'张某某',
          phone:'1388888888',
          date:'2020/06/01'
        },{
          num:'LHS',
          name:'富士康龙华南区',
          latitude:'深圳市',
          address:'龙华区东环二路富士康科技园',
          region:'A1-A12栋、B1-B9栋、C1-C11栋',
          personal:'张某某',
          phone:'1388888888',
          date:'2020/06/01'
        },{
          num:'LHS',
          name:'富士康龙华南区',
          latitude:'深圳市',
          address:'龙华区东环二路富士康科技园',
          region:'A1-A12栋、B1-B9栋、C1-C11栋',
          personal:'张某某',
          phone:'1388888888',
          date:'2020/06/01'
        },{
          num:'LHS',
          name:'富士康龙华南区',
          latitude:'深圳市',
          address:'龙华区东环二路富士康科技园',
          region:'A1-A12栋、B1-B9栋、C1-C11栋',
          personal:'张某某',
          phone:'1388888888',
          date:'2020/06/01'
        },{
          num:'LHS',
          name:'富士康龙华南区',
          latitude:'深圳市',
          address:'龙华区东环二路富士康科技园',
          region:'A1-A12栋、B1-B9栋、C1-C11栋',
          personal:'张某某',
          phone:'1388888888',
          date:'2020/06/01'
        }]
        // value:'',
        //  options: [{
        //   value: '选项1',
        //   label: '全部'
        // }, {
        //   value: '选项2',
        //   label: '富士康龙华北区'
        // }, {
        //   value: '选项3',
        //   label: '富士康龙华南区'
        // }, {
        //   value: '选项4',
        //   label: '富士康烟台厂区'
        // }, {
        //   value: '选项5',
        //   label: '富士康青岛厂区'
        // },
        // {
        //   value: '选项6',
        //   label: '富士康观澜厂区'
        // }]
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
      this.$router.push({path:"/platform/shop/regionEdit",query:{data:row.date}})
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
  #regionCss{
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