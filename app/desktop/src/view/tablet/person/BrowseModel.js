Ext.define('App.view.tablet.person.BrowseModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.browse',

    stores: {
        browser: {
            fields: [
                { name: 'username', type: 'string' },
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'email', type: 'string' },
                { name: 'skype', type: 'string' },
                { name: 'linkedin', type: 'string' },
                { name: 'phone', type: 'string' },
                { name: 'extension', type: 'string' },
                { name: 'birthday', type: 'date', dateFormat: 'Y-m-d' },
                { name: 'title', type: 'string' },
                { name: 'picture', type: 'string' },
                { name: 'started', type: 'date', dateFormat: 'Y-m-d' },
                { name: 'ended', type: 'date', dateFormat: 'Y-m-d' },
                { name: 'office_id', reference: 'Office' },
                { name: 'organization_id', reference: 'Organization' },

                // Calculated fields
                {
                    name: 'fullname', calculate: function (data) {
                        return data.firstname + ' ' + data.lastname;
                    }
                }
            ],

            data: [{
                name : 'customer Service',
                username: 'abc',
                firstname: 'Ayz',
                lastname: 'Rbh',
                title: 'developer',
                headcount: 5,
                organization: {
                    name: 'abc',
                    managername: 'ksrh',
                },
                manager: {
                    firstname : 'mfname ',
                    lastname : 'mlname',
                },
                office: {
                    name: 'ikm',
                    city: 'banglore',
                    country: 'India'
                },
                email: 'abc@fhg.com',
                phone: '8988898888'
            }]
        }
    }
});