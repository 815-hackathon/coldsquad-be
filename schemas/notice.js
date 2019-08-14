const mongoose = require('mongoose');
const { Schema } = mongoose;

const notice = new Schema({
    name: String,
    content: {
        type: String,
        required: true,
    }
}, {
        timestamps: {
            createdAt: 'created_at'
        }
    })

module.exports = mongoose.model('notice', notice);