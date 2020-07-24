<template>
    <div>
        <button @click="getSelectedRows()">Get Selected Rows</button>

        <ag-grid-vue :style="{width:width,height:height}"
                     class="ag-theme-alpine"
                     :columnDefs="columnDefs"
                     :rowData="rowData"
                     rowSelection="multiple"

                     @grid-ready="onGridReady">
        </ag-grid-vue>
    </div>
<!-- 
rowSelection="multiple"     多选框属性
@grid-ready                grid表格初始化事件
getSelectedNodes()         获取选中的行 
-->
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null
            }
        },
        props:{
          width: {
               type: String,
               required: false,
               default:"1280px"
          },
          height: {
               type: String,
               required: false,
               default:"500px"
          }
        },
        components: {
            AgGridVue
        },
        methods: {
            onGridReady(params) {    //agGrid属性,初始化变量
                this.gridApi = params.api;                      //获取表格的api
                this.columnApi = params.columnApi;              //获取列的api
            },
            getSelectedRows() {
                const selectedNodes = this.gridApi.getSelectedNodes();

                const selectedData = selectedNodes.map( node => node.data );
                
                console.log(selectedNodes,'我是selectnodes数据')

                const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');

                alert(`Selected nodes: ${selectedDataStringPresentation}`);
            }
        },
        beforeMount() {

        }
    }
</script>

<style>
</style>

