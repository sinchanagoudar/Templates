Ext.define('{appName}.view.pages.Error404Window', {
    extend: '{appName}.view.pages.ErrorBase',
    xtype: 'page404',

    requires: [
        '{appName}.view.authentication.AuthenticationController',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Spacer'
    ],

    items: [
        {
            xtype: 'container',
            width: 400,
            cls:'error-page-inner-container',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'label',
                    cls: 'error-page-top-text',
                    text: '404'
                },
                {
                    xtype: 'label',
                    cls: 'error-page-desc',
                    html: '<div>Seems you\u0027ve hit a wall!</div><div>Try going back to our <a href="#dashboard"> Home page </a></div>'
                },
                {
                    xtype: 'tbspacer',
                    flex: 1
                }
            ]
        }
    ]
});
