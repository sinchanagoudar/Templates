Ext.define('{appName}.view.pages.BlankPage', {
    extend: 'Ext.Container',
    xtype: 'pageblank',

    requires: [
        'Ext.layout.VBox'
    ],

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },

    items: [{
        cls: 'blank-page-container',
        html: '<div class=\u0027fa-outer-class\u0027><span class=\u0027x-fa fa-clock\u0027></span></div>' +
            '<h1>Coming Soon!</h1><span class=\u0027blank-page-text\u0027>Stay tuned for updates</span>'
    }]
});
