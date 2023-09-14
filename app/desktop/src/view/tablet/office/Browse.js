Ext.define('App.view.tablet.office.Browse', {
    extend: 'App.view.office.Browse',
    // xtype: 'officebrowse', -- set by profile

    requires: [
        'Ext.plugin.ListPaging'
    ],

    controller: 'tablet-officebrowse',
    viewModel: {
        type: 'browse'
    },

    tbar: {
        xtype: 'officebrowsetoolbar'
    },

    items: [{
        xtype: 'grid',
        emptyText: 'No office was found to match your search',
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
                '<a class="item-title" href="#{url}">{office.name}</a>',
                '</tpl>']
        }, {
            text: 'Address',
            dataIndex: 'country',
            flex: 2,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="office">',
                '<div class="item-title">{city}, {country}</div>',
                '<div class="item-caption">{address}<div>',
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
                '<a href="#people/office/{id}">',
                '{headcount:plural("employee")}',
                '</a>'
            ]
        }],

        listeners: {
            childdoubletap: 'onChildActivate'
        }
    }]
});
