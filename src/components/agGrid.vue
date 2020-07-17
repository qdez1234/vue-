<template>
    <div>
        <button @click="getSelectedRows()">Get Selected Rows</button>

         <ag-grid-vue
                :style="{width:width,height:height}"
                class="ag-theme-alpine"
                @grid-ready="onGridReady"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :singleClickEdit="true"
                :modules="modules"
                :rowData="rowData"></ag-grid-vue>
    </div>

</template>

<script>
    import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
    import {AgGridVue} from "ag-grid-vue";
    export default {
        name: 'App',
        data() {
        return {
           gridApi: null,
           columnApi: null, 
           defaultColDef: null,                    //配置表格默认行为
           modules: [ClientSideRowModelModule],   //表格编辑组件
         };
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
          },
          columnDefs:{
               required: false,
               default:null
          },
          rowData:{
               required: false,
               default:null
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
            }
        },
        beforeMount() {
                   this.defaultColDef = {
                      //  flex: 3,
                          editable: true,
                    };
        }
    }
</script>

<style  scoped>

</style>
