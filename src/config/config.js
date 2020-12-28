module.exports = {
    server: {
        name: "OnLearn",
        url: "localhost:3000",
        port: 3000
    },
    middleware: {
        requestValidation: {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true
        }
    },
    database: {
        server: process.env.DB_SERVER,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    mail: {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EM_USER,
            pass: process.env.EM_PASSWORD
        }
    }
}