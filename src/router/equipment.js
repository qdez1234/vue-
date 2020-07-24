export default
	[
		{
			path: '/platform/equipment',     
			name: '平台',
			component: resolve => require(['@/views/platform'], resolve),
			children: [
			{
				path: '/platform/equipment/supplier',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/supplier'], resolve),
				name: '供应商管理',
			},
			{
				path: '/platform/equipment/supplierEdit',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/supplierEdit'], resolve),
				name: '供应商修改管理',
			},
			{
				path: '/platform/equipment/supplierNewbuild',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/supplierNewbuild'], resolve),
				name: '供应商新建管理',
			},
			{
				path: '/platform/equipment/equipmenter',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/equipmenter'], resolve),
				name: '设备品类管理',
			},
			{
				path: '/platform/equipment/equipmentNewbuild',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/equipmentNewbuild'], resolve),
				name: '设备品类新建管理',
			},
			{
				path: '/platform/equipment/signal',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/signal'], resolve),
				name: '通信管理',
			},
			{
				path: '/platform/equipment/signalNewbuild',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/signalNewbuild'], resolve),
				name: '通信新增管理',
			},
			{
				path: '/platform/equipment/terminal',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/terminal'], resolve),
				name: '终端管理',
			},
			{
				path: '/platform/equipment/terminalNewbuild',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/terminalNewbuild'], resolve),
				name: '终端新建管理',
			},
			{
				path: '/platform/equipment/stock',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/stock'], resolve),
				name: '库存管理',
			},
			{
				path: '/platform/equipment/stockAdd',   //equipment代表是设备管理页面
				component: resolve => require(['@/views/equipment/stockAdd'], resolve),
				name: '入库管理',
			}
			]
		},
	]