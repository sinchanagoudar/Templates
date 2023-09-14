Ext.define('App.view.tablet.history.Browse', {
    extend: 'App.view.history.Browse',
    // xtype: 'historybrowse', -- set by profile

    requires: [
        'Ext.plugin.ListPaging'
    ],

    tbar: {
        xtype: 'historybrowsetoolbar'
    },

    viewModel: {
        type: 'browse'
    },

    items: [{
        xtype: 'grid',
        emptyText: 'No activity was found to match your search',
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
            dataIndex: 'type',
            align: 'center',
            width: 75,
            cell: {
                cls: 'history-visual',
                encodeHtml: false
            },
            tpl: [
                '<span class="action-{fieldtype} {fieldtype:actionIconCls}" style="background-color:{fieldcolor}"></span>',
                '<div class="picture" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_ISts29g264fOEQBSIpLsI-TiG2WmonFHUZsUYmE2mIv660EaZjuA76ooyG9UqLgwH0&usqp=CAU)"></div>'
            ]
        }, {
            text: 'Name / Title',
            dataIndex: 'recipient.lastname',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for=".">',
                '<a class="item-title" href="#{url}">{recipient.firstname}{recipient.lastname}</a>',
                '<div class="item-caption">{title}</div>',
                '</tpl>'
            ]
        }, {
            text: 'Organization',
            dataIndex: 'organization.name',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="organization">',
                '<a class="item-title" href="#{url}">{name}</a>',
                '</tpl>'
            ]
        }, {
            text: 'Office',
            dataIndex: 'office.name',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="office">',
                '<a class="item-title" href="#{url}">{name}</a>',
                '<div class="item-caption">{city}, {country}</div>',
                '</tpl>'
            ]
        }, {
            xtype: 'datecolumn',
            dataIndex: 'created',
            format: 'Y-m-d H:i',
            text: 'Date',
            flex: 1
        }]
    }]
});
