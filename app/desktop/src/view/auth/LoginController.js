Ext.define('App.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authlogin',

    init: function() {
        this.callParent(arguments);
        this.lookup('form').setValues({
            username: 'norma.flores',
            password: 'wvyrEDvxI'
        });
    },

    onLoginTap: function() {
        var me = this;
            form = me.lookup('form'),
            values = form.getValues();

        form.clearErrors();

       
        if (!form.isValid()) {
            Ext.Viewport.setMasked({ xtype: 'loadmask' });
        }else {
            me.fireEvent('login');     
    }
    }
});


