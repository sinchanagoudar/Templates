Ext.define('App.view.widgets.HistoryView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'historyview',

    config: {
        displayField: 'recipient.fullname'
    },

    cls: 'historyview',
    ui: 'history light',
    emptyText: 'No history',
    deferEmptyText: false,
    minHeight: 80,
    inline: true,


    updateDisplayField: function(value) {
        this.setItemTpl([
            '<div class="history-item-wrapper">',
                '<div class="history-visual">',
                    '<span class="action action-{fieldtype} {fieldtype:actionIconCls}" style="background-color:{fieldcolor}"></span>',
                    '<div class="picture large" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_ISts29g264fOEQBSIpLsI-TiG2WmonFHUZsUYmE2mIv660EaZjuA76ooyG9UqLgwH0&usqp=CAU)"></div>',
                '</div>',
                '<div class="history-details">',
                    '<div class="display">{subject}</div>',
                    '<div class="date">{createdDate}</div>',
                '</div>',
            '</div>'
        ]);
    },

    itemCls: 'history-item'
});
