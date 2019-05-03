var keystone = require('keystone')

keystone.init({
    'cookie secret': 'secure string goes here',
    'name': 'hogares',
    'user model': 'User',
    'auto update': true,
    'auth': true,
    views: 'templates/views',
    'view engine': 'ejs'
})

keystone.set('routes', require('./routes'))
keystone.import('models')
keystone.start()
