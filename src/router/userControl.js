export default
	[
		{
			path: '/platform/userControl',     
			name: '平台',
			component: resolve => require(['@/views/platform'], resolve),
			children: [
			{
				path: '/platform/userControl/userList',   
				component: resolve => require(['@/views/userControl/userList'], resolve),
				name: '用户管理',
			},
			{
				path: '/platform/userControl/userListEdit',
				component: resolve => require(['@/views/userControl/userListEdit'], resolve),
				name: '新建用户',
			}
			]
		},
	]