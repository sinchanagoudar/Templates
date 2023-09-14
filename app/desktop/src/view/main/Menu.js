Ext.define('App.view.main.Menu', {
    extend: 'App.view.widgets.Sidebar',
    xtype: 'mainmenu',

    config: {
        selection: null
    },

    controller: 'mainmenu',

    cls: 'main-menu',
    layout: 'vbox',
    weighted: true,

    items: {
        trigger: {
            xtype: 'button',
            handler: 'onTriggerTap',
            iconCls: 'x-fa fa-bars',
            ui: 'large flat dark',
            style:{ 
                'margin-top':'20px'
            },
            docked: 'top'
        },
        navigator: {
            xtype: 'dataview',
            style:{
                background:'#353535'
            },
            scrollable: 'y',
            store: 'Menu',
            weight: 0,
            flex: 1,
            ui: 'dark large',
            selectable: {
                deselectable: false
            },
            itemTpl: [
                '<span class="icon x-fa fa-{icon}"></span>',
                '<span class="text" style = "margin-top:40px">{text}</span>'
            ],
            listeners: {
                childtap: 'onMenuChildTap'
            }
        },
        profile: {
            xtype: 'button',
            ui: 'large flat dark picture',
            style:{
                background:'#353535',
            },
            iconCls: 'picture',
            textAlign: 'left',
            weight: 10,
            bind: {
                icon: '{user.picture}',
                text: '<div class="title">Norma Flores</div>'+
                    '<div class="value">norma.flores</div>'
            }
        },
        logout: {
            xtype: 'button',
            style:{
                background:'#353535'
            },
            handler: 'onLogoutTap',
            iconCls: 'x-fa fa-power-off',
            text: 'Log out',
            textAlign: 'left',
            ui: 'large flat dark',
            weight: 20
        }
    },

    updateSelection: function(value) {
        this.child('#navigator').setSelection(value);
    }
});
