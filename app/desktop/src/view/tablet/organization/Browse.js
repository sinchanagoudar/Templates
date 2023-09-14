Ext.define('App.view.tablet.organization.Browse', {
    extend: 'App.view.organization.Browse',
    // xtype: 'organizationbrowse', -- set by profile

    requires: [
        'Ext.plugin.ListPaging'
    ],

    controller: 'tablet-organizationbrowse',
    viewModel: {
        type: 'browse'
    },


    tbar: {
        xtype: 'organizationbrowsetoolbar'
    },

    items: [{
        xtype: 'grid',
        emptyText: 'No organization was found to match your search',
        bind: '{browser}',
        ui: 'listing',

        selectable: {
            disabled: true
        },

        plugins: [{
            type: 'listpaging',
            autoPaging: true
        }],

        columns: [{
            text: 'Name',
            dataIndex: 'office.name',
            flex: 2,
            cell: {
                encodeHtml: false
            },
            tpl: ['<tpl for=".">',
                '<b><a class="item-title" href="#{url}">{office.name}</a></b>',
                '</tpl>']
        }, {
            text: 'Manager',
            dataIndex: 'manager.lastname',
            flex: 2,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for=".">',
                '<div class="item-title">',
                '<b><a href="#{url}">{manager.firstname}{manager.lastname}</a></b>',
                '</div>',
                '<div class="item-caption">',
                '<a href="#{url}">{office.name}</a>, ',
                '{office.city} ({office.country})',
                '</div>',
                '</tpl>'
            ]
        }, {
            text: 'Headcount',
            dataIndex: 'headcount',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<b><a href="#people/organization/{id}">',
                '{headcount:plural("employee")}',
                '</a></b>'
            ]
        }],

        listeners: {
            childdoubletap: 'onChildActivate'
        }
    }]
});
