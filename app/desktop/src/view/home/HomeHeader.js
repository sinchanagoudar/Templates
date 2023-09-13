Ext.define('App.view.home.HomeHeader', {
    extend: 'Ext.Container',
    xtype: 'homeheader',

    cls: 'home-header',
    layout: 'vbox',

    items: [{
        xtype: 'component',
        cls: 'header-message',
        html: '<div class="text">'+
                 '<div class="greeting">Good Morning</div>'+
                 '<div class="person-name">Norma</div>'+
              '</div>'
    }, {
        xtype: 'container',
        layout: 'hbox',
        userCls: [
            'page-constrained',
            'header-info'
        ],
        items: [{
            xtype: 'component',
            cls: 'header-links',
            flex: 1,
            html: 
                '<tpl for="organization.manager">'+
                    '<div class="item">'+
                        '<div class="picture" style="background-image: url({picture})"></div>'+
                        '<div class="title">Manager</div>'+
                        '<a class="link">fullname</a>'+
                    '</div>'+
                '</tpl>'+
                '<tpl for="organization">'+
                    '<div class="item">'+
                        '<span class="icon x-fa fa-sitemap"></span>'+
                        '<div class="title">Organization</div>'+
                        '<a class="link">name</a>'+
                    '</div>'+
                '</tpl>'+
                '<tpl for="office">'+
                    '<div class="item">'+
                        '<span class="icon x-fa fa-globe"></span>'+
                        '<div class="title">Office</div>'+
                        '<a class="link">name</a>'+
                    '</div>'+
                '</tpl>'
            
          
        }, {
            xtype: 'component',
            cls: 'header-clock',
            tpl: [
                '<div class="date">{time:date("l, F d")}</div>',
                '<div class="time"><span class="x-fa fa-clock-o"></span> {time:date("G:ia")}</div>'
            ],
            bind: {
                data: {
                    time: '{time}'
                }
            }
        }]
    }]
});
