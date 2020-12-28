const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    firstname: { 
        type: String, 
        required: true 
    },
    lastname: String,
    email: { 
        type: String,
        unique: true, required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    roles: { 
        type: Array, 
        required: true 
    },
    verification: {
        email: {
            isVerified: {
                type: Boolean,
                default: false
            },
            token: String,
            verificationMailSent: {
                type: Boolean,
                default: false
            },
            verifiedAt: Date
        }
    },
    language: { 
        type: String, 
        default: "en" 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: Date
})

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.password;
        delete ret.verified
        delete ret.rol
        delete ret.payment
    }
});

module.exports = mongoose.model('User', userSchema);