Ext.define('App.view.home.HomeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.home',

    data: {
        greeting: null,
        range: 'upcoming',
        time: null
    },

    stores: {
        history: {
            autoLoad: true,
            fields: [
                { name: 'type', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'recipient_id', type: 'string' },
                { name: 'created', type: 'date', dateFormat: 'C', persist: false }
            ],
            data: [
                {
                    type: 'user', subject: 'Pillip Evans', recipient_id: 'vgh', created: '24/01/2000', date: 'Mar 7', typecase: 'anniversary',
                    person : {
                        fullname : 'Pillip',
                        title : 'Sales Reprenstative',
                        birthday: '2000-01-15',
                        started: '2023-09-13',
                        year:'13 years'
                    }
                },
                {
                    type: 'user', subject: 'Frances Cox', recipient_id: 'vgh', created: '24/01/2000', date: 'Mar 1', typecase: 'birthday',
                    person : {
                        fullname : 'Frances Cox',
                        title : 'VP Marketing',
                        birthday: '2000-01-15',
                        started: '2023-09-13',
                        year:'47 years old'
                    }
                },
                {
                    type: 'user', subject: 'Peter Berry', recipient_id: 'vgh', created: '24/01/2000', date: 'Feb 24', typecase: 'anniversary',
                    person : {
                        fullname : 'Peter Berry',
                        title : 'General Manager',
                        birthday: '2000-01-15',
                        started: '2023-09-13',
                        year:'10 years'
                    }
                },
                {
                    type: 'user', subject: 'Past Castello', recipient_id: 'vgh', created: '24/01/2000', date: 'Feb 23', typecase: 'birthday',
                    person : {
                        fullname : 'Past Castello',
                        title : 'Sales Reprenstative',
                        birthday: '2000-01-15',
                        started: '2023-09-13',
                        year:'58 years old'
                    }
                },
                {
                    type: 'user', subject: 'Gary Reid', recipient_id: 'vgh', created: '24/01/2000', date: 'Feb 23', typecase: 'birthday',
                    person : {
                        fullname : 'Gary Reid',
                        title : 'Graphic Desinger',
                        birthday: '2000-01-15',
                        started: '2023-09-13',
                        year:'51 years old'
                    }
                },
                {
                    type: 'user', subject: 'Amy Devis', recipient_id: 'vgh', created: '24/01/2000', date: 'Feb 19', typecase: 'anniversary',
                    person : {
                        fullname : 'Amy Devis',
                        title : 'VP Quality Control',
                        birthday: '2000-01-15',
                        started: '2023-09-13',
                        year:'14 years'
                    }
                },
                {
                    type: 'user', subject: 'Maria Baily', recipient_id: 'vgh', created: '24/01/2000', date: 'Feb 14', typecase: 'anniversary',
                    person : {
                        fullname : 'Maria Baily',
                        title : 'Juniour Executive',
                        birthday: '2000-01-15',
                        started: '2023-09-13',
                        year:'9 years'
                    }
                },
                {
                    type: 'user', subject: 'Past Castello', recipient_id: 'vgh', created: '24/01/2000', date: 'Feb 14', typecase: 'birthday',
                    person : {
                        fullname : 'Past Castello',
                        title : 'Research Nurse',
                        birthday: '2000-01-15',
                        started: '2023-09-13',
                        year:'43 yeas old'
                    }
                }
            ]
        },
        events: {
            // type: 'events',
            autoLoad: false,    // loaded from HomeController
            pageSize: 8
        }
    }
});