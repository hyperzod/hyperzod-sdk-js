const Global = require('./API/Global');
const Auth = require('./API/Auth/Auth')
const User = require('./API/User/User')

const repositories = {
    global: Global,
    auth: Auth,
    user: User,
}

const RequestFactory = {
    get: name => repositories[name],
};

module.exports = {RequestFactory}