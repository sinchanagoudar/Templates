Ext.define('App.view.tablet.person.Browse', {
    extend: 'App.view.person.Browse',
    // xtype: 'personbrowse', -- set by profile

    requires: [
        'Ext.plugin.ListPaging'
    ],

    controller: 'tablet-personbrowse',
    viewModel: {
        type: 'browse'
    },


    tbar: {
        xtype: 'personbrowsetoolbar'
    },

    items: [{
        xtype: 'grid',
        emptyText: 'No employee was found to match your search',
        bind: '{browser}',
        ui: 'listing',

        selectable: {
            disabled: true
        },

        plugins: [{
            type: 'listpaging',
            autoPaging: true
        }],

        columnMenu: {
            items: {
                groupByThis: false,
                showInGroups: false
            }
        },

        columns: [{
            dataIndex: 'picture',
            menuDisabled: true,
            hideable: false,
            sortable: false,
            align: 'center',
            width: 58,
            cell: {
                encodeHtml: false
            },
            tpl: '<div class="picture" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_ISts29g264fOEQBSIpLsI-TiG2WmonFHUZsUYmE2mIv660EaZjuA76ooyG9UqLgwH0&usqp=CAU)"></div>'
        }, {
            text: 'Name / Title',
            dataIndex: 'lastname',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<b><a class="item-title" href="#{url}">{fullname}</a></b>',
                '<div class="item-caption">{title}</div>'
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
                    '<b><a class="item-title" href="#{url}">{name}</a></b>',
                    '<div class="item-caption">',
                        'Managed by <a href="#{url}">{managername}</a>',
                    '</div>',
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
                    '<b><a class="item-title" href="#{url}">{name}</a></b>',
                    '<div class="item-caption">{city}, {country}</div>',
                '</tpl>'
            ]
        }, {
            sortable: false,
            dataIndex: 'email',
            text: 'Email/Phone',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<b><div class="item-info"><span class="x-fa fa-envelope"></span> {email}</div></b>',
                '<div class="item-info"><span class="x-fa fa-phone"></span> {phone}</div>'
            ]
        }]
    }]
});
