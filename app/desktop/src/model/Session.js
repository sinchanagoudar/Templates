Ext.define('App.model.Session', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'token', type: 'string' },
        { name: 'expires', type: 'date' },
        { name: 'user', reference: 'Person' }
    ]
});
