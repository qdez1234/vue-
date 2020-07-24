import * as API from '@/api/common/index.js'

export async function getRootApi(params) {              //获取用户权限账号
    return  await API.GET("/v1/flash/positions",{})
};

export async function getAccountListApi(params) {              //账号管理==>查询账号列表
    return  await API.GET("/v1/flash/accounts",{})
};

export async function addAccountApi(params) {              //账号管理==>添加账号
    return  await API.POST("/v1/flash/accounts",params)
};
