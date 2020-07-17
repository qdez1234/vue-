export default
	[
		{
			path: '/member',
			component: resolve => require(['@/views/home'], resolve),
			name: '会员',
			// leaf: true,
			// iconCls: 'iconfont icon-books',
			// children: [{
			// 	path: '/member',
			// 	component: resolve => require(['@/views/member/home'], resolve),
			// 	name: '会员管理',
			// 	menuShow: true,
			// 	meta: {
			// 		keepAlive: true
			// 	},
			// 	redirect: '/member/login',
			// 	children: [
			// 	{
			// 			path: '/member/login',
			// 			component: resolve => require(['@/views/member/login'], resolve),
			// 			name: '登陆日志',
			// 			meta: {
			// 				keepAlive: true
			// 			}
			// 	},
			// 	]
			// },
			// ]
		}
	]