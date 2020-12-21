const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    firstname: { 
        type: String, 
        required: true 
    },
    lastname: String,
    email: { 
        type: String, // will be improved! 
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