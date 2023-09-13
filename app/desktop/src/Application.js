Ext.define('App.Application', {
	extend: 'Ext.app.Application',
	name: 'App',
	requires: [
		'App.*',
		'Ext.MessageBox'
	],

	defaultToken: 'home',

	profiles: [
        'Phone',
        'Tablet'
    ],
	controllers: [
        'Action'    // creates one global instance of the Action controller
    ],
	stores: [
        'Menu'      // creates one global instance of the Menu store (Ext.getStore('Menu'))
    ],
	viewport: {
        controller: 'viewport',
        viewModel: 'viewport'
    },

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'authlogin'
		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
