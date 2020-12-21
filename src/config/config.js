module.exports = {
    server: {
        name: "onlearn",
        port: 3000
    },
    database: {
        server: process.env.DB_SERVER,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}