<template>
  <div class="publicBox" id="equipmentCSS ">
          <div class="boxItem " id="publicSearch">

<el-form ref="form" :inline="true"  class="demo-form-inline">
  <el-form-item label="供应商名称">
            <el-select v-model="value" placeholder="全部" class="pubSlt">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
 <el-form-item>
            <el-button class="pubBtnBlue" type="primary">查询</el-button>
            <el-button class="pubBtnGree"  type="primary">新建</el-button>
  </el-form-item>
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
        columnDefs :[
            {headerName: '设备类型', field: 'zip',width:86},
            {headerName: '设备型号', field: 'make',width:400},
            {headerName: '设备名称', field: 'price',width:400},
            {headerName: '创建时间', field: 'date',width:120},
            {headerName: '当前状态', field: 'state',width:90}
        ],
        tableData: [{
          date: '2016-05-03',
          make: 'XCG-800G',
          price: '滚筒8公斤',
          state:'正常',
          zip: '洗衣机'
        },{
          date: '2016-05-03',
          make: 'XCG-800G',
          price: '滚筒8公斤',
          state:'正常',
          zip: '洗衣机'
        },{
          date: '2016-05-03',
          make: 'XCG-800G',
          price: '滚筒8公斤',
          state:'正常',
          zip: '洗衣机'
        },{
          date: '2016-05-03',
          make: 'XCG-800G',
          price: '滚筒8公斤',
          state:'正常',
          zip: '洗衣机'
        },{
          date: '2016-05-03',
          make: 'XCG-800G',
          price: '滚筒8公斤',
          state:'正常',
          zip: '洗衣机'
        },{
          date: '2016-05-03',
          make: 'XCG-800G',
          price: '滚筒8公斤',
          state:'正常',
          zip: '洗衣机'
        },{
          date: '2016-05-03',
          make: 'XCG-800G',
          price: '滚筒8公斤',
          state:'正常',
          zip: '洗衣机'
        }],
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
  }
</style>