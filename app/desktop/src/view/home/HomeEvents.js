Ext.define('App.view.home.HomeEvents', {
    extend: 'Ext.Panel',
    xtype: 'homeevents',

    cls: 'home-events',

    tbar: {
        layout: {
            pack: 'center'
        },

        items: [{
            xtype: 'container',
            items: [{
                xtype: 'button',
                text: 'Upcoming',
                value: 'upcoming'
            }, {
                xtype: 'button',
                text: 'Recent',
                value: 'recent'
            }, {
                xtype: 'button',
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
                '<div class="picture large"  style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_ISts29g264fOEQBSIpLsI-TiG2WmonFHUZsUYmE2mIv660EaZjuA76ooyG9UqLgwH0&usqp=CAU)"></div>',
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