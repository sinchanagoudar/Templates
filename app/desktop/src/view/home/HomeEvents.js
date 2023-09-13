Ext.define('App.view.home.HomeEvents', {
    extend: 'Ext.Panel',
    xtype: 'homeevents',

    cls: 'home-events',

    tbar: {
        layout: {
            pack: 'center'
        },

        items: [{
            xtype: 'segmentedbutton',
            defaultUI: 'segmented flat',
            bind: '{range}',
            items: [{
                text: 'Upcoming',
                value: 'upcoming'
            }, {
                text: 'Recent',
                value: 'recent'
            }, {
                text: 'Past',
                value: 'past'
            }]
        }]
    },

    items: [{
        xtype: 'dataview',
        bind: '{history}',
        minHeight: 80,
        inline: true,
        ui: 'light',

        selectable: {
            disabled: true
        },

        itemTpl: [
            '<div style="background-color: #f5f5f5">',
            '<div class="event-header type-{type}">',
                '<div class="date">{date}</div>',
                '<div class="title">',
                    '<tpl switch="typecase">',
                    '<tpl case="birthday">Birthday',
                    '<tpl case="anniversary">Anniversary',
                    '<tpl case="started">Arrival',
                    '<tpl case="ended">Departure',
                    '</tpl>',
                '</div>',
            '</div>',
            '<div class="event-content">',
                '<div class="picture large"  style="background-image: url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"></div>',
                '<div class="details">',
                    '<div class="person-name">{person.fullname}</div>',
                    '<div class="person-title">{person.title}</div>',
                    '<div class="person-years">{person.year}',
                    '</div>',
                '</div>',
            '</div>',
            '</div>'
        ],

        listeners: {
            childtap: 'onEventChildTap'
        }
    }]
});