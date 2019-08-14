const mongoose = require('mongoose');
const { Schema } = mongoose;

const food = new Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    expireDate: Date,
    storeDate: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    memo: String,
}, {
        timestamps: {
            createdAt: 'created_at',
        }
    })

module.exports = mongoose.model('refrigerator', food, 'refrigerator');
