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

            data: [
                {
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Brian',
                lastname: 'Armstrong',
                title: 'Design Engineer',
                headcount: 5,
                email: 'brain.armstrong@extjsdemo.com',
                phone: '8988898888',
                created: '24-01-2000',
                fieldtype: 'phone',
                fieldcolor: 'red',
                organization: {
                    name: 'Strategy',
                    managername: 'James Roberts',
                },
                manager: {
                    firstname: 'James ',
                    lastname: 'Roberts',
                },
                office: {
                    name: 'Fairfield',
                    city: 'Energodar',
                    country: 'Ukraine',
                    address: '9 Grim Center'
                },
                recipient: {
                    firstname: 'Laura ',
                    lastname: 'Russell',
                    title: 'Product Engineer'
                }
            },{
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Maria',
                lastname: 'Bailey',
                title: 'Juniour Executive',
                headcount: 5,
                email: 'maria.baily@extjsdemo.com',
                phone: '9889765367',
                created: '24-01-2000',
                fieldtype: 'email',
                fieldcolor: 'green',
                organization: {
                    name: 'Engineering',
                    managername: 'Eric White',
                },
                manager: {
                    firstname: 'Eric ',
                    lastname: 'White',
                },
                office: {
                    name: 'Dryden',
                    city: 'Limoges',
                    country: 'France',
                    address: '39149 Carberry Avenue'
                },
                recipient: {
                    firstname: 'Theresa ',
                    lastname: 'Reyas',
                    title: 'Pharmacist'
                }
            },{
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Sinchana',
                lastname: 'Naganagoudar',
                title: 'software Engineer',
                headcount: 5,
                email: 'sinchana.goudar@extjsdemo.com',
                phone: '9964789300',
                created: '24-01-2000',
                fieldtype: 'email',
                fieldcolor: 'red',
                organization: {
                    name: 'Engineering',
                    managername: 'Vajra D',
                },
                manager: {
                    firstname: 'Vajra ',
                    lastname: 'D',
                },
                office: {
                    name: 'celestial',
                    city: 'Bengalore',
                    country: 'India',
                    address: '98510 Rutledge Court'
                },
                recipient: {
                    firstname: 'Raymond ',
                    lastname: 'Kelly',
                    title: 'Research Nurse'
                }
            },{
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Anu',
                lastname: 'Prakash',
                title: 'software Engineer',
                headcount: 5,
                email: 'anu.prakash@extjsdemo.com',
                phone: '7878653290',
                created: '24-01-2000',
                fieldtype: 'phone',
                fieldcolor: 'green',
                organization: {
                    name: 'Engineering',
                    managername: 'Vajra',
                },
                manager: {
                    firstname: 'Vajra ',
                    lastname: 'D',
                },
                office: {
                    name: 'celestial',
                    city: 'Bengalore',
                    country: 'India',
                    address: '5 3rs Court'
                },
                recipient: {
                    firstname: 'Bonnie ',
                    lastname: 'Sanders',
                    title: 'Technical Writer'
                }
            },{
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Benjamin',
                lastname: 'Banks',
                title: 'Account Executive',
                headcount: 5,
                email: 'benjamin.banks@extjsdemo.com',
                phone: '9964789300',
                created: '24-01-2000',
                fieldtype: 'phone',
                fieldcolor: 'red',
                organization: {
                    name: 'Management',
                    managername: 'Joshe Washington',
                },
                manager: {
                    firstname: 'Joshe ',
                    lastname: 'Washington',
                },
                office: {
                    name: 'paririview',
                    city: 'Oslo',
                    country: 'Norway',
                    address: '3 Corscot Drive'
                },
                recipient: {
                    firstname: 'Howard',
                    lastname: 'Stevens',
                    title: 'Nurse'
                }
            },{
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Peter',
                lastname: 'Berry',
                title: 'General Manager',
                headcount: 5,
                email: 'peter.berry@extjsdemo.com',
                phone: '1112223330',
                created: '24-01-2000',
                fieldtype: 'email',
                fieldcolor: 'orange',
                organization: {
                    name: 'Marketing',
                    managername: 'Norma Oslon',
                },
                manager: {
                    firstname: 'Norma ',
                    lastname: 'Oslon',
                },
                office: {
                    name: 'Lukken',
                    city: 'Novogireyevo',
                    country: 'Russia',
                    address: '714 Armistice Alley'
                },
                recipient: {
                    firstname: 'Amy',
                    lastname: 'Devis',
                    title: 'Research Nurse'
                }
            },{
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Kathy',
                lastname: 'Bryant',
                title: 'Research Nurse',
                headcount: 5,
                email: 'kathy.bryant@extjsdemo.com',
                phone: '9990008753',
                created: '24-01-2000',
                fieldtype: 'phone',
                fieldcolor: 'green',
                organization: {
                    name: 'Human Resources',
                    managername: 'Scott Long',
                },
                manager: {
                    firstname: 'Scott ',
                    lastname: 'Long',
                },
                office: {
                    name: 'Manitowish',
                    city: 'yokosuka',
                    country: 'Japan',
                    address: '26241 Mosinee Terrace'
                },
                recipient: {
                    firstname: 'Melissa',
                    lastname: 'Sanders',
                    title: 'Recruiter'
                }
            },{
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Pat',
                lastname: 'Castillo',
                title: 'Graphic Desinger',
                headcount: 5,
                email: 'pat.castillo@extjsdemo.com',
                phone: '5554678932',
                created: '24-01-2000',
                fieldtype: 'email',
                fieldcolor: 'red',
                organization: {
                    name: 'Strategy',
                    managername: 'James Roberts',
                },
                manager: {
                    firstname: 'James ',
                    lastname: 'Roberts',
                },
                office: {
                    name: 'Welch',
                    city: 'Marystiwn',
                    country: 'Canada',
                    address: '200 Manufactureres Plaza'
                },
                recipient: {
                    firstname: 'Harry',
                    lastname: 'Tucker',
                    title: 'Administrative Officer'
                }
            },{
                organizationame: 'customer Service',
                username: 'abc',
                firstname: 'Rose',
                lastname: 'Cooper',
                title: 'Editor',
                headcount: 5,
                email: 'rose.cooper@extjsdemo.com',
                phone: '9090876543',
                created: '24-01-2000',
                fieldtype: 'phone',
                fieldcolor: 'orange',
                organization: {
                    name: 'strategy',
                    managername: 'James Roberts',
                },
                manager: {
                    firstname: 'James ',
                    lastname: 'Roberts',
                },
                office: {
                    name: 'Welch',
                    city: 'Energodar',
                    country: 'Australia',
                    address: '4057 Miller Road'
                },
                recipient: {
                    firstname: 'Daniel',
                    lastname: ' Fisher',
                    title: 'Clinical Specialist'
                }
            },
        ]
        }
    }
});