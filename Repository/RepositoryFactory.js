const Global = require('./Global');
const Auth = require('./Auth/Auth')
const User = require('./User/User')

const repositories = {
    global: Global,
    auth: Auth,
    user: User,
}

const RepositoryFactory = {
    get: name => repositories[name],
};

module.exports = {RepositoryFactory}