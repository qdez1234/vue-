export default
	[
		{
			path: '/platform/shop',     
			name: '平台',
			component: resolve => require(['@/views/platform'], resolve),
			children: [
			{
				path: '/platform/shop/shoper',   //shop代表是门店管理页面
				component: resolve => require(['@/views/shop/shoper'], resolve),
				name: '门店管理',
            },
            {
				path: '/platform/shop/region',   //shop代表是门店管理页面
				component: resolve => require(['@/views/shop/region'], resolve),
				name: '区域管理',
            },
            {
				path: '/platform/shop/shoperNewbuild',   //shop代表是门店管理页面
				component: resolve => require(['@/views/shop/shoperNewbuild'], resolve),
				name: '门店新增管理',
			},
            {
				path: '/platform/shop/shoperEdit',   //shop代表是门店管理页面
				component: resolve => require(['@/views/shop/shoperEdit'], resolve),
				name: '门店编辑管理',
            },
            {
				path: '/platform/shop/regionEdit',   //shop代表是门店管理页面
				component: resolve => require(['@/views/shop/regionEdit'], resolve),
				name: '区域编辑管理',
            },
            {
				path: '/platform/shop/regionNewbuild',   //shop代表是门店管理页面
				component: resolve => require(['@/views/shop/regionNewbuild'], resolve),
				name: '区域新增管理',
			}
			]
		},
	]