define([
 ], function ( ) {

	return {
		menus: [
			//simple menu
			{
				type: 'simple',
				title:  'Example',
				icon: '',
				widget: {
					title:  'Example',
					icon: '<i class="fa fa-clone"></i>',
					path: 'app/widgets/example/example'
				}
			},
			//dropdown menu
			{
				type: 'dorpdown',
				title:   'drawTitleMenu',
				icon: '',
				submenus: [{
					title:   'drawTitle',
					icon: '',
					widget: {
						title:   'drawTitle',
						icon: '<i class="fas fa-pencil-alt"></i>',
						path: 'app/widgets/draw/draw'
					}
				}]
			}
		]


	}
});