module.exports = {
    server: {
        port: process.env.PORT || 3000,
        ip: null,
        domains: [
            'misis-books-angular-ipritoflex.c9.io',
            'localhost:3000'
        ],
        cur_domain: 1
    },
    db: {},
    vkOauth: {
        clientId: 4720039,
        clientSecret: '2y46bADDjd7xzrH3mqqB'
    }
};
