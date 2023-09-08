Ext.define('{appName}.view.widgets.WidgetF', {
    extend: '{appName}.view.widgets.WidgetE',
    xtype: 'widget-f',

    cls:'{appName}-widget info-card-item info-card-large-wrap shadow',

    height: 280,

    tpl: '<div><span class="x-fa fa-{icon}"></span><h2>{amount}</h2><div class="infodiv">{type}</div></div>'
});
