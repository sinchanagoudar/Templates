Ext.define('{appName}.view.pages.BlankPage', {
    extend: 'Ext.container.Container',
    xtype: 'pageblank',

    requires: [
        'Ext.container.Container'
    ],

    anchor : '100% -1',

    layout:{
        type:'vbox',
        pack:'center',
        align:'center'
    },

    items: [
        {
            xtype: 'box',
            cls: 'blank-page-container',
            html: '<div class=\u0027fa-outer-class\u0027><span class=\u0027x-fa fa-clock\u0027></span></div><h1>Coming Soon!</h1><span class=\u0027blank-page-text\u0027>Stay tuned for updates</span>'
        }
    ]
});
