export default
	[
		{
			path: '/platform/system',     
			name: '平台',
			component: resolve => require(['@/views/platform'], resolve),
			children: [
			{
				path: '/platform/system/account',   //账号管理
				component: resolve => require(['@/views/system/account'], resolve),
				name: '账号管理',
			},
			{
				path: '/platform/system/accountEdit',   //新建账号
				component: resolve => require(['@/views/system/accountEdit'], resolve),
				name: '新建账号',
			},
			{
				path: '/platform/system/character',   //账号管理
				component: resolve => require(['@/views/system/character'], resolve),
				name: '角色管理',
			},
			{
				path: '/platform/system/sysConfig',   //账号管理
				component: resolve => require(['@/views/system/sysConfig'], resolve),
				name: '系统设置',
			}
			]
		},
	]