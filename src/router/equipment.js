export default
	[
		{
			path: '/platform',     
			name: '平台',
			component: resolve => require(['@/views/platform'], resolve),
			children: [{
				path: '/platform/equipment',   //equipment代表是设备管理页面
				background:"eeeee",
				component: resolve => require(['@/views/equipment/supplier'], resolve),
				name: '设备管理',
				children: [{
					path: '/platform/equipment/supplier',   //path为supplier代表是设备管理里面的供应商页面
					component: resolve => require(['@/views/equipment/supplier'], resolve),
					name: '供应商管理',
				}]
			},
			]
		}
	]