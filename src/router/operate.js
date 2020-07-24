export default
	[
		{
			path: '/platform/operate',     
			name: '平台',
			component: resolve => require(['@/views/platform'], resolve),
			children: [
			{
				path: '/platform/operate/price',   //shop代表是门店管理页面
				component: resolve => require(['@/views/operate/price'], resolve),
				name: '定价管理',
            },{
				path: '/platform/operate/service',   //shop代表是门店管理页面
				component: resolve => require(['@/views/operate/service'], resolve),
				name: '服务项目管理',
            },
            {
				path: '/platform/operate/coupon',   //shop代表是门店管理页面
				component: resolve => require(['@/views/operate/coupon'], resolve),
				name: '优惠卷管理',
            },
            {
				path: '/platform/operate/serviceNewbuild',   //shop代表是门店管理页面
				component: resolve => require(['@/views/operate/serviceNewbuild'], resolve),
				name: '服务项目新增管理',
            },
            {
				path: '/platform/operate/priceNewbuild',   //shop代表是门店管理页面
				component: resolve => require(['@/views/operate/priceNewbuild'], resolve),
				name: '定价新增管理',
            }
			]
		},
	]